const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// Middleware
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json()); // Дозволяє читати JSON з body запитів

// Тут пізніше будуть наші роути (api/auth, api/products тощо)
// app.use('/api/user', authRouter);

// Обробка неіснуючих маршрутів (404)
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Централізована обробка помилок (500)
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
