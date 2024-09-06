import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { corsMiddleware } from "./middlewares/corsMiddleware.js";

const app = express();
// config({ path: "./config/config.env" });
const result = config({ path: "./config/config.env" });

// Check for errors while loading .env file
if (result.error) {
  console.error("Error loading .env file:", result.error);
  process.exit(1); // Exit the application if .env file is not loaded
} else {
  console.log(".env file loaded successfully");
}

app.use(corsMiddleware);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
dbConnection();

app.use(errorMiddleware);
export default app;
