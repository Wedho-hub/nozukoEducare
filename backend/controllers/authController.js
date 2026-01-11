import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper: generate JWT token for authenticated user
const generateToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

// Register a new user. Input validated before reaching controller.
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ token: generateToken(user) });
  } catch (err) {
    next(err);
  }
};

// Login existing user and return JWT
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check .env admin credentials first
    if (
      email === process.env.ADMIN_USER &&
      password === process.env.ADMIN_PASS
    ) {
      // Issue a token for the hardcoded admin
      const adminPayload = {
        _id: 'env-admin',
        role: 'admin',
        email: process.env.ADMIN_USER,
        name: 'Admin'
      };
      return res.json({ token: generateToken(adminPayload) });
    }

    // Otherwise, check database users
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    res.json({ token: generateToken(user) });
  } catch (err) {
    next(err);
  }
};
