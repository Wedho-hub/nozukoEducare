import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const adminEmail = "admin@nozukoeducare.co.za";

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Admin123!", 10);

    await User.create({
      name: "Nozuko Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin user seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();
