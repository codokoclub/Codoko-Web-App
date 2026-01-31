import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandlers.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Login } from "../model/login.model.js";
import { User } from "../model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



const generateAcessTokenAndRefreshToken = async (userId) => {

    try {

        const user = await User.findById(userId)

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    }
    catch (error) {
        throw new apiError(500, "Something went wrong while generating refresh and access token")
    }
}


const userRegistration = asyncHandler(async (req, res) => {


    const { councilId, password, name, academicDetails, designation, contactDetails, socialHandle, dateOfJoining, description } = req.body

    if (
        [councilId, password, academicDetails, designation, contactDetails.email, socialHandle.github, dateOfJoining, description]
            .some((field) => field == "")) {
        throw new apiError(400, "All fields are required!")
    }

    const existedUser = await User.findOne({ councilId })

    if (existedUser) {
        throw new apiError(409, "User with council id already exists");
    }


    if (!req.files?.signaturePic || !req.files?.profilePic) {
        throw new apiError(400, "Profile pic and Signature pic are required");
    }


    const profileLocalPath = req.files?.profilePic[0].path;

    console.log(profileLocalPath)

    let signatureLocalPath = req.files?.signaturePic[0].path;

    console.log(signatureLocalPath)

    if (!profileLocalPath) {
        throw new apiError(400, "Profile Pic is required")
    }

    const profilePic = await uploadOnCloudinary(profileLocalPath)
    const signaturePic = await uploadOnCloudinary(signatureLocalPath)

    console.log(profilePic.url)
    if (!profilePic) {
        throw new apiError(400, "Profile Pic is required")
    }

    const user = await User.create({
        councilId: councilId,
        password: password,
        name: name,
        academicDetails: academicDetails,
        designation: designation,
        description: description,
        contactDetails: contactDetails,
        socialHandle: socialHandle,
        dateOfJoining: dateOfJoining,
        profilePic: profilePic?.url || "",
        signaturePic: signaturePic?.url || ""
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {
        throw new apiError(500, "Something went wrong while registering the User!")
    }

    return res.status(201).json(new apiResponse(200, createdUser, "User registered Successfully!"))


})



const userLogin = asyncHandler(async (req, res) => {

    const { councilId, password } = req.body;

    if ([councilId, password].some((field) => field?.trim() == "")) {
        throw new apiError(400, "All fields are required!")
    }

    const user = await User.findOne({councilId})

    if (!user) {
        throw new apiError(404, "User doesn't exist!")
    }

    console.log(user)

    const isPasswordValid = await user.isPasswordCorrect(password)

    console.log(isPasswordValid)


    if (!isPasswordValid) {
        throw new apiError(401, "Invalid user credentials")
    }


    const { accessToken, refreshToken } = await generateAcessTokenAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }


    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new apiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged in Successfully"
            )
        )

})


const logOut = asyncHandler(async(req,res)=>{

    console.log(req)

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1
            }
        },
        {
            new:true
        }
    )

    const options = {
        httpOnly:true,
        secure:true
    }


    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new apiResponse(200,{},"User logged Out"))

})

export { userRegistration, userLogin,logOut }