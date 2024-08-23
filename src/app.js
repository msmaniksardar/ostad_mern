import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import { MAX_JSON_SIZE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME, URL_ENCODED, WEB_CACHE } from "./config/config";
import router from "./routes/api";

export const app = express();


// security apply 
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser())


// Request Size Limit apply 
app.use(express.json({ limit: MAX_JSON_SIZE }))
// URL Encoded
app.use(bodyParser.urlencoded({ extended: URL_ENCODED }));
// SET REQUEST LIMIT
const limiter = rateLimit({windowMs: REQUEST_LIMIT_TIME, limit: REQUEST_LIMIT_NUMBER})
app.use(limiter);
// WEB CACHE 
app.set("etag" , WEB_CACHE);

// USE ROUTE 

app.use("/api", router);


