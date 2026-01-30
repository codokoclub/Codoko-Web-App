import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandlers.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Login } from "../model/login.model.js";



const generateAcessTokenAndRefreshToken = async (userId) => {

    try {

        const user = await Login.findById(userId)

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


const userRegistration = asyncHandler(async(req,res)=>{
    
})



const userLogin = asyncHandler(async (req, res) => {


    const { councilId, password } = req.body;

    if ([councilId, password].some((field) => field?.trim() == "")) {
        throw new apiError(400, "All fields are required!")
    }



    const user = await Login.findOne(councilId)

    if(!user) {
        throw new apiError(404, "User doesn't exist!")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)


    if (!isPasswordValid) {
        throw new apiError(401, "Invalid user credentials")
    }


    const { accessToken, refreshToken } = await generateAcessTokenAndRefreshToken(user._id)

    const loggedInUser = await Login.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly:true,
        secure:true
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


export { userLogin }