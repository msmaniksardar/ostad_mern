import express from "express";
const router = express.Router(); 
import * as examController from "../controllers/examController";

router.get("/" , examController.aboutPage);
router.get("/about" , examController.aboutPage);
router.get("/contact" , examController.contactPage);



export default router;