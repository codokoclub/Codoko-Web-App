import { Router } from "express";

import { login,user,logout } from "../controller/councilMember.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router()


router.route("/user").post(upload.single("profilePic"),user)
router.route("/logout").post(logout)


export default router