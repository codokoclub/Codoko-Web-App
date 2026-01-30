import { Router } from "express";
import { userLogin } from "../controllers/users.controllers.js";
const router = Router()

router.route('/login').post(userLogin)


export default router