import Blog from "../models/Blog.js";

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
  res.json(blogs);
};

export const createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json(blog);
};
