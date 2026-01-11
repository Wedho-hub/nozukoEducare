export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error handling middleware: Express requires a 4-arg signature (err, req, res, next).
// We intentionally keep the fourth parameter to let Express detect this as an
// error handler; `_next` is unused but named with a leading underscore to
// satisfy linters complaining about unused variables.
export const errorHandler = (err, req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
