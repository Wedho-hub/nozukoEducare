import Class from "../models/Class.js";

// Return all classes sorted by newest
export const getClasses = async (req, res, next) => {
  try {
    const classes = await Class.find().sort({ createdAt: -1 });
    res.json(classes);
  } catch (err) {
    next(err);
  }
};

// Create a new class (admin only)
export const createClass = async (req, res, next) => {
  try {
    const cls = await Class.create(req.body);
    res.status(201).json(cls);
  } catch (err) {
    next(err);
  }
};
