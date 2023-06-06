require("dotenv").config();
const path = require("path");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
// const router = require("./routes");
const vendors = require("./routes/vendors.js");

const client = require("./db/db");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Routes
// app.use("/products", router.products);
// app.use("/qa", router.qa);
app.use(
  "/vendors",
  (req, res, next) => {
    console.log("SERVER receiving request to /vendors");
    next();
  },
  vendors
); // app.use('/cart', router.cart);

// Serving static files
app.use(express.static(path.join(__dirname, "../client/dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
