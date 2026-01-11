import express from "express";
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js"; // Auth middleware: checks JWT
import { adminOnly } from "../middleware/adminMiddleware.js"; // Admin guard: checks user role
import { validate } from "../middleware/validate.js"; // Zod validation middleware
import { blogSchema } from "../validations/blogValidation.js"; // Blog validation schema

const router = express.Router();

/**
 * Blog Routes
 * All routes are prefixed with /api/blogs
 */

// Public: List all published blog posts
// GET /api/blogs
router.get("/", getBlogs);

// Public: Get a single blog post by id or slug
// GET /api/blogs/:id
router.get('/:id', getBlogById)

// Admin: Create a new blog post (protected, validated)
// POST /api/blogs
router.post("/", protect, adminOnly, validate(blogSchema), createBlog);

// Import update schema for partial updates
import { blogUpdateSchema } from "../validations/blogValidation.js";

// Admin: Update a blog post (protected, validated)
// PUT /api/blogs/:id
router.put("/:id", protect, adminOnly, validate(blogUpdateSchema), updateBlog);

// Admin: Delete a blog post (protected)
// DELETE /api/blogs/:id
router.delete("/:id", protect, adminOnly, deleteBlog);

export default router;
