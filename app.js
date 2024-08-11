require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routerFile = require("./routes/todos");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const connectDB = require("./bd");
const methodOverride = require("method-override");

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
// подключение ejs
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware

// routong
app.use("/", routerFile);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
