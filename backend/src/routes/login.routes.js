import { Router } from "express";
import { userLogin, userRegistration } from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";


const router = Router()


router.route('/register').post(upload.fields([
    {
        name:"profilePic",
        maxCount:1
    },
    {

        name:"signaturePic",
        maxCount:1
    }
]),userRegistration)
router.route('/login').post(userLogin)

export default router