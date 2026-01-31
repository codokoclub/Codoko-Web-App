import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandlers.js";




const dashboardControlller = asyncHandler(async (req, res) => {


    const { primaryEventTitle, primaryEventDetails, primaryEventDate, primaryEventJoiningLink,
        secondaryEventTitle, secondaryEventDetails, secondaryEventDate, secondaryEventJoiningLink,
    } = req.body;




    if ([primaryEventTitle, primaryEventDetails, primaryEventJoiningLink, primaryEventDate, secondaryEventDate, secondaryEventDetails, secondaryEventJoiningLink, secondaryEventTitle].some((field) => field == "")) {
        throw new apiError(400, "All fields are required!");
    }
})


export { dashboardControlller }