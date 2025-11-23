import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// ✅ Load environment variables first
dotenv.config({ path: "./.env" });

const app = express();

// ✅ Then configure CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// ✅ Parse JSON bodies (20KB limit)
app.use(express.json({ limit: "20kb" }));

// ✅ Parse URL-encoded data
app.use(express.urlencoded({ extended: true,limit:"16kb" }));

app.use(express.static("public"))

// ✅ Enable cookie parsing
app.use(cookieParser());

// ✅ Import routes
import login from "./routes/login.routes.js";

// ✅ Mount routes
app.use("/api/v1", login)



export { app };
