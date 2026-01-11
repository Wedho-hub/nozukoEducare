import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

// Load environment variables and connect to DB
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (env=${process.env.NODE_ENV || "development"})`);
});

// Graceful shutdown listeners for uncaught errors
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  server.close(() => process.exit(1));
});
