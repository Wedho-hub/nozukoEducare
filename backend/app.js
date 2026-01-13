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

// CORS: allow Netlify frontend and localhost for dev
const allowedOrigins = [
	process.env.FRONTEND_URL,
	'http://localhost:5173',
	'http://localhost:3000',
];
app.use(cors({
	origin: function (origin, callback) {
		// allow requests with no origin (like mobile apps, curl, etc.)
		if (!origin) return callback(null, true);
		if (allowedOrigins.includes(origin)) {
			return callback(null, true);
		} else {
			return callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true
}));
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
	console.log("[PRODUCTION] Serving static frontend from:", staticPath);
	app.use(express.static(staticPath));

	// For any unmatched route, send index.html for client-side routing
	app.get(/^\/((?!api|uploads).)*$/, (req, res) => {
		console.log("[PRODUCTION] Fallback to index.html for:", req.url);
		res.sendFile(path.join(staticPath, "index.html"));
	});
}

// Error middleware LAST
app.use(notFound);
app.use(errorHandler);

export default app;
