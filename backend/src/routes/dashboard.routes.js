import { Router } from "express";
import { dashboardControlller } from "../controllers/dashboard.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";



const router = Router()


router.route('/data').post(upload.fields[
    {

        name:"primaryEventImage",
        maxCount:1
    },
    {
        name:"secondaryEventImage",
        maxCount:1

    }
],dashboardControlller)


export default router