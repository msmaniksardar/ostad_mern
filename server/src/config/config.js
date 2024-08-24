export const PORT = process.env.PORT || 3000; // Provide a default port value
export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 minutes in milliseconds
export const REQUEST_LIMIT_NUMBER = 3000;
export const WEB_CACHE = false; // Set to true to enable ETag generation
export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION || ""; // Ensure this is set in your environment
