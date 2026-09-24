const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user");
const productsRouter = require("./routes/api/products");
const storesRouter = require("./routes/api/stores");
const reviewsRouter = require("./routes/api/reviews");
const cartRouter = require("./routes/api/cart");

const globalErrorHandler = require("./middlewares/globalErrorHandler");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/user", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/stores", storesRouter);
app.use("/api/customer-reviews", reviewsRouter);
app.use("/api/cart", cartRouter); 


app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(globalErrorHandler);

module.exports = app;
