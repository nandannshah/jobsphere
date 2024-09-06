// corsMiddleware.js
export function corsMiddleware(req, res, next) {
    const allowedOrigins = [process.env.FRONTEND_URL]; // Add more origins if needed
    const origin = req?.headers?.origin;
  
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.setHeader("Access-Control-Allow-Credentials", "true");
    }
  
    next();
  }
  