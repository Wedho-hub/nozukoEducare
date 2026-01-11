import express from "express";
import { getClasses, createClass } from "../controllers/classController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";
import { validate } from "../middleware/validate.js";
import { classSchema } from "../validations/classValidations.js";

const router = express.Router();

// Public: list available classes
router.get("/", getClasses);

// Admin: create a class. Protected and validated.
router.post("/", protect, adminOnly, validate(classSchema), createClass);

export default router;
