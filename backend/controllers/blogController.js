import Blog from "../models/Blog.js";

/**
 * Get all published blogs, sorted by newest first.
 * Route: GET /api/blogs
 * Public endpoint.
 */
export const getBlogs = async (req, res, next) => {
  try {
    // Find all published blogs, sorted by creation date (newest first)
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    // Pass error to error middleware
    next(err);
  }
};

/**
 * Get a single blog post by MongoDB ObjectId or slug.
 * Route: GET /api/blogs/:id
 * Public endpoint.
 * Returns 404 if not found or not published.
 */
export const getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let blog = null;
    // Try to find by ObjectId (24 hex chars)
    if (/^[a-fA-F0-9]{24}$/.test(id)) {
      blog = await Blog.findById(id);
    }
    // If not found, or not a valid ObjectId, try by slug
    if (!blog) {
      blog = await Blog.findOne({ slug: id });
    }
    // Only return if published
    if (!blog || !blog.published) return res.status(404).json({ message: 'Post not found' });
    res.json(blog);
  } catch (err) {
    // Log error for debugging
    console.error('getBlogById error:', err);
    next(err);
  }
}

/**
 * Create a new blog post (admin only).
 * Route: POST /api/blogs
 * Protected endpoint (admin).
 * Validates required fields and prevents publishing without title/slug.
 */
export const createBlog = async (req, res, next) => {
  try {
    const payload = req.body || {}

    // Prevent publishing without a valid title/content (validation middleware covers this) and slug
    if (payload.published && !payload.slug && !payload.title) {
      return res.status(400).json({ message: 'Cannot publish without a valid title/slug' })
    }

    // Create the blog post
    const blog = await Blog.create(payload)
    res.status(201).json(blog)
  } catch (err) {
    // Log error and return 500
    console.error('Blog creation error:', err)
    res.status(500).json({ message: err.message || 'Internal server error', stack: process.env.NODE_ENV === 'production' ? null : err.stack })
    // Optionally: next(err) to use error middleware
  }
};

/**
 * Update an existing blog post (admin only).
 * Route: PUT /api/blogs/:id
 * Protected endpoint (admin).
 * Applies updates and validates before saving.
 */
export const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params
    const payload = req.body || {}

    // Find the blog post by ID
    const blog = await Blog.findById(id)
    if (!blog) return res.status(404).json({ message: 'Blog not found' })

    // Apply updates from request body
    Object.assign(blog, payload)

    // Validate and save
    await blog.validate()
    await blog.save()

    res.json(blog)
  } catch (err) {
    next(err)
  }
}

/**
 * Delete a blog post (admin only).
 * Route: DELETE /api/blogs/:id
 * Protected endpoint (admin).
 * Returns 204 on success, 404 if not found.
 */
export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params
    // Find and delete the blog post
    const blog = await Blog.findByIdAndDelete(id)
    if (!blog) return res.status(404).json({ message: 'Blog not found' })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}
