import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandlers.js";
import { Event } from "../model/dashboard/event.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";
import { codingEmperor } from "../model/dashboard/codingEmperor.model.js";


const eventController = asyncHandler(async (req, res) => {


    const { primaryEventTitle, primaryEventDetails, primaryEventDate, primaryEventJoiningLink,
        secondaryEventTitle, secondaryEventDetails, secondaryEventDate, secondaryEventJoiningLink,
    } = req.body;




    if ([primaryEventTitle, primaryEventDetails, primaryEventJoiningLink, primaryEventDate, secondaryEventDate, secondaryEventDetails, secondaryEventJoiningLink, secondaryEventTitle].some((field) => field == "")) {
        throw new apiError(400, "All fields are required!");
    }


    let primaryEventImageLocalPath = req.files?.primaryEventImage[0]?.path;
    
    let secondaryEventImageLocalPath = req.files?.secondaryEventImage[0]?.path;
    

    const primaryEventImageUpload  =  await uploadOnCloudinary(primaryEventImageLocalPath);
    const secondaryEventImageUpload  =  await uploadOnCloudinary(secondaryEventImageLocalPath);



    if(!primaryEventImageLocalPath){
        throw new apiError(400, "Primary Event Image is required!")
    }

    const event = await Event.create({
        primaryEventTitle:primaryEventTitle,
        primaryEventDetails:primaryEventDetails,
        primaryEventJoiningLink:primaryEventJoiningLink,
        primaryEventDate:primaryEventDate,
        primaryEventImage:primaryEventImageUpload?.url || "",
        
        secondaryEventTitle:secondaryEventTitle,
        secondaryEventDetails:secondaryEventDetails,
        secondaryEventJoiningLink:secondaryEventJoiningLink,
        secondaryEventDate:secondaryEventDate,
        secondaryEventImage:secondaryEventImageUpload?.url || "",


    })

    if(!event){
        throw new apiError(500, "Something went wrong while saving the Event Information")
    }


    return res.status(201).json(
        new apiResponse(200,"Event Information Stored Successfully!")
    )
})

const codingEmperorController = asyncHandler( async(req,res)=>{
  
    const {emperorName, emperorAcademicDetails, emperorDesc} = req.body;

    if([emperorName, emperorAcademicDetails,emperorDesc].some((field)=> field.trim == ""))
    {
        throw new apiError(400,"All fields are required!")
    }


    const emperorImageLocalPath = req.files?.emperorImage[0]?.path;
    console.log(emperorImageLocalPath)

    if(!emperorImageLocalPath){
        throw new apiError(400,"Emperor Image is required!")
    }

    const emperorImage = await uploadOnCloudinary(emperorImageLocalPath);


   const emperor = await codingEmperor.create({
        emperorName:emperorName,
        emperorDesc:emperorDesc,
        emperorAcademicDetails:emperorAcademicDetails,
        emperorImage:emperorImage.url
    })


    if(!emperor){
        throw new apiError(500,"Something went wrong while storing coding emperor details")
    }

    return res.status(201).json( new apiResponse(200,"Coding Emperor Details Stored Successfully!"))

})


export { eventController, codingEmperorController }