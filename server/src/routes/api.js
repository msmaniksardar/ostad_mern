import express from "express";
const router = express.Router(); 
import * as examController from "../controllers/examController.js";

router.get("/" , examController.homePage);
router.get("/about" , examController.aboutPage);
router.get("/contact" , examController.contactPage);
router.get("/file-write",examController.writefileMethod);



export default router;