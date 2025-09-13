import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

console.log({ PORT });

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});