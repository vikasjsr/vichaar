import express from "express";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

import user from "./routes/userRoutes.js";
import post from "./routes/postRoutes.js";
app.use("/api/v1", user);
app.use("/api/v1", post);

export default app;

app.use(ErrorMiddleware);
