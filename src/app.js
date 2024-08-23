import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import { ExpressValidator } from "express-validator";
import cookieParser from "cookie-parser";
import { MAX_JSON_SIZE, URL_ENCODED } from "./config/config";

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
