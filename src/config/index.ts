export const API_ROOT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ecommerce-market-one.vercel.app";