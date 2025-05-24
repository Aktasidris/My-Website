import { Router } from "express";
import {
    getAllTestimonials,
    submitTestimonial,
    checkIpHasCommented
} from "../controllers/testimonial.controller";

const router = Router();

router.get("/", getAllTestimonials);
router.post("/", submitTestimonial);
router.get("/check-ip/:ip", checkIpHasCommented);

export default router;
