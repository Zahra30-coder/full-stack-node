const API_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://your-production-url.com";

export default API_BASE;