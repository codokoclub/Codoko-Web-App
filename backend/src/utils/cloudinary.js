import { v2 as cloudinary } from "cloudinary";

cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
});


const uploadOnCloudinary = async function(avatarLocalPath){
   try {

    console.log("I am in Cloudinary Utls")
     if(!avatarLocalPath) { return "No Local Path"}
 
    const response = await cloudinary.uploader.upload(avatarLocalPath,{resource_type:"auto",folder:"profilePic"})
    return response
   } catch (error) {
    console.error("ERROR during Uploading",error);
    return null
   }

    
}
export default uploadOnCloudinary