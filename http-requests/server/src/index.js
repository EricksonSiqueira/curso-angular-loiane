const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multparty = require("connect-multiparty");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

const multipartMiddleware = multparty({ uploadDir: "./uploads" });

app.post("/upload", multipartMiddleware, (req, res) => {
  const files = req.files;
  res.json({ message: files });
});

app.use((error, _req, res, _next) => res.json({ error: error.message }));

app.listen(8000, () => console.log("listening on port 8000"));
