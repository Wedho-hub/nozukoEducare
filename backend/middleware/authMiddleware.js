import jwt from "jsonwebtoken";

// Protect routes: expects an Authorization header with Bearer <token>
export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer")) {
    const err = new Error("Not authorized");
    err.status = 401;
    return next(err);
  }

  try {
    const token = authHeader.split(" ")[1];
    // jwt.verify returns the decoded payload (e.g., { id, role, iat, exp })
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
