import mongoose from "mongoose";

/**
 * Connect to MongoDB using MONGO_URI environment variable.
 * Mongoose v7 has sensible defaults; additional options can be passed here
 * if necessary (replica sets, tls options, etc.).
 */
const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI not set in environment");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
