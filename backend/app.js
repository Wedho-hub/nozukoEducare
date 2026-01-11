import express from "express";
import cors from "cors";
import path from "path";
import url from "url";

import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

// CORS: restrict to FRONTEND_URL if provided, otherwise allow all for development
const corsOptions = {
	origin: process.env.FRONTEND_URL || true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve uploaded files at /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// API routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
import uploadRoutes from './routes/uploadRoutes.js'
app.use('/api/uploads', uploadRoutes)
app.use("/api/classes", classRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
	res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// In production, serve the frontend static build (assumes `frontend/dist` exists)
if (process.env.NODE_ENV === "production") {
	const staticPath = path.join(__dirname, "..", "frontend", "dist");
	app.use(express.static(staticPath));

	// For any unmatched route, send index.html for client-side routing
	app.get("*", (req, res) => {
		res.sendFile(path.join(staticPath, "index.html"));
	});
}

// Error middleware LAST
app.use(notFound);
app.use(errorHandler);

export default app;
