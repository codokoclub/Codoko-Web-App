import asyncHandlers from "../utils/asyncHandlers.js";
import apiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js";
import { loginUser } from "../model/login.model.js";
import { memberInfo } from "../model/memberInfo.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

/**
 * @desc    Generate access + refresh tokens
 */
const generateRefreshTokenAndAccessToken = async function (userId) {
  try {
    const user = await memberInfo.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(500, "Something went wrong while generating tokens");
  }
};

/**
 * @desc    Register a new member
 * @route   POST /api/members
 * @access  Private/Admin (optional)
 */
const user = asyncHandlers(async function (req, res, next) {
  try {
    console.log(req.body)
    const {
      profilePic,
      councilId,
      password,
      fullName,
      emailId,
      contactNo,
      designation,
      academicDetail,
      description,
      socialHandles,
    } = req.body;

    // 🧩 Helper to normalize form-data (arrays sent as strings)
    const normalizeArray = (input) => {
      if (Array.isArray(input)) return input;
      if (typeof input === "string") {
        try {
          return JSON.parse(input);
        } catch {
          return [input];
        }
      }
      return [];
    };

    const parsedEmailId = normalizeArray(emailId);
    const parsedContactNo = normalizeArray(contactNo);
    const parsedSocialHandles = normalizeArray(socialHandles);

    console.log("Incoming body:", req.body);
    console.log("Incoming file:", req.file);

    // 🖼️ Upload Profile Pic on Cloudinary
    if (!req.file) throw new apiError(400, "Profile picture is required");

    const avatarLocalPath = req.file.path;
    const avatarInfo = await uploadOnCloudinary(avatarLocalPath);
    if (!avatarInfo) throw new apiError(400, "Profile pic not uploaded on Cloudinary");

    const avatarUrl = avatarInfo.url;
    console.log("✅ Profile pic uploaded:", avatarUrl);

    console.log({
  councilId,
  password,
  fullName,
  parsedEmailId,
  parsedContactNo,
  designation,
  academicDetail
});

    // 🧾 Validate required fields  
    // !Error lies here
    if (
      !councilId ||
      !password ||
      !fullName ||
      !parsedEmailId.length ||
      !parsedContactNo.length ||
      !designation ||
      !academicDetail
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // 🧰 Allowed designations (optional check)
    const allowedDesignations = [
      "Founder",
      "Chairman",
      "Vice Chairman",
      "Club Coordinator",
      "Developer",
      "Instructor",
      "Faculty Incharge",
      "Faculty Coordinator",
    ];

    if (!allowedDesignations.includes(designation)) {
      return res.status(400).json({
        success: false,
        message: "Invalid designation provided",
      });
    }

    // 🔍 Check for duplicates
    const existingMember = await memberInfo.findOne({
      $or: [
        { emailId: { $in: parsedEmailId } },
        { contactNo: { $in: parsedContactNo } },
        { councilId: councilId.toLowerCase().trim() },
      ],
    });

    if (existingMember) {
      return res.status(409).json({
        success: false,
        message:
          "Member with this council ID, email, or contact number already exists",
      });
    }

    // 📧 Validate each email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    for (const email of parsedEmailId) {
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: `Invalid email format: ${email}`,
        });
      }
    }

    // ☎️ Validate contact numbers
    const phoneRegex = /^(?:\+91[-\s]?|0)?[6-9]\d{9}$/;
    for (const phone of parsedContactNo) {
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          success: false,
          message: `Invalid phone number format: ${phone}`,
        });
      }
    }

    // 🔐 Create member (password hashing handled in schema pre-save hook)
    const registeredMember = await memberInfo.create({
      profilePic: avatarUrl,
      councilId: councilId.toLowerCase().trim(),
      password,
      fullName: fullName.trim(),
      emailId: parsedEmailId,
      contactNo: parsedContactNo,
      designation,
      academicDetail: academicDetail.trim(),
      description,
      socialHandles: parsedSocialHandles,
    });

    if (!registeredMember)
      throw new apiError(500, "Something went wrong while registering!");

    res.status(200).json({
      success: true,
      message: "Member Registered Successfully!",
      data: registeredMember,
    });
  } catch (error) {
    console.error("❌ Error creating member:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later",
      error: error.message,
    });
  }
});

/**
 * @desc Login User
 */
const login = asyncHandlers(async function (req, res, next) {
  console.log("Login request body:", req.body);
  res.send("Got Login Details!!");
});

/**
 * @desc Logout User
 */
const logout = asyncHandlers(async function (req, res, next) {
  console.log("Logout request body:", req.body);
});

export { login, user, logout };
