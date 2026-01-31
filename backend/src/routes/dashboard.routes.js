import { Router } from "express";
import {  eventController, codingEmperorController } from "../controllers/dashboard.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";



const router = Router()


router.route('/event').post(upload.fields([
    {

        name:"primaryEventImage",
        maxCount:1
    },
    {
        name:"secondaryEventImage",
        maxCount:1

    }
]),eventController)


router.route('/emperor').post(upload.fields([

    {
        name:"emperorImage",
        maxCount:1
    }

]),codingEmperorController)

export default router