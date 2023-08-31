import express from "express";
import dotenv from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// const COOKIE_SECRET = process.env.COOKIE_SECRET

dotenv.config();
const app = express();

const corsOpts = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};
// middleware provide cross-origin resource sharing
app.use(cors(corsOpts));

// inbuilt middleware of express
// Using express.json() middleware is common when building APIs or web applications that handle JSON data,
// as it simplifies the process of handling JSON payloads in incoming requests.
// inbuilt middleware of express
// When a client submits a form on a web page, the data from the form is typically included in the body of
// the HTTP request using URL-encoded format. URL encoding replaces spaces and other special characters with
// percent-encoded values, making the data safe for transmission in URLs.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Cookie parsing middleware
app.use(cookieParser());

// to check whether server is working or not
// app.use("/", (req, res, next) => {
//   res.send("<h1>server is working</h1>");
// });

// user Route is implemented as middleware
import user from "./routes/userRoutes.js";
import post from "./routes/postRoutes.js";

app.use("/api/vichaar", user);

app.use("/api/vichaar", post);

app.use(ErrorMiddleware); // Apply error handling middleware here

export default app;
