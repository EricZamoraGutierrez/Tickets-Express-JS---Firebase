const { log } = require("console");
const express = require("express");
const path = require("path");
const { create } = require("express-handlebars");
const Handlebars = require("handlebars");
const methodOverride = require ('method-override');

const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const flash = require("connect-flash");
const { loginUser } = require("./controllers/auth.controller");


// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  }).engine
);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(flash());
app.use(require("./routes/index.routes"));


// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;