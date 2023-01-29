export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://coding-challenge-mhs.onrender.com"
    : "http://localhost:5000";

export default baseUrl;
