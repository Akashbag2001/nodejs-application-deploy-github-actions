import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.json({
    message: `Hello From the server!!`,
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on Port : ${PORT}`);
});
