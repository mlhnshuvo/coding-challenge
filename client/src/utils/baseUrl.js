export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://coding-challenge-mhs.render.com"
    : "http://localhost:5000";

export default baseUrl;
