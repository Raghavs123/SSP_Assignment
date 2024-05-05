if(process.env.NODE_ENV != "production"){  // since, currently we are in development phase
  require('dotenv').config();  // require env (environment variables)
}
// console.log(process.env);  // remove this after you've confirmed it is working
console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema } = require("./schema.js");    // require listing schema (Server Side Validation - Joi)
// const Review = require("./models/review.js");
// const { reviewSchema } = require("./schema.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,  // time in milliseconds
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true
  }
};
app.use(session(sessionOptions));    // express session
app.use(flash());  // flash message (routes ke pehle use krna)

// passport uses session
app.use(passport.initialize());  // a middleware that initializes passport
app.use(passport.session());  // to identify users as they browse from page to page (stores the user's information of current session)
passport.use(new LocalStrategy(User.authenticate()));  // use static authenticate method of model in LocalStrategy

passport.serializeUser(User.serializeUser());  // use static serialize of model for passport session support (to serialize users into the session)
passport.deserializeUser(User.deserializeUser());  // use static deserialize of model for passport session support (to deserialize users into the session)

app.use((req,res,next) => {   // Middleware for res.locals for creating a new listing (flash message)
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  // console.log(res.locals.success);
  res.locals.currUser = req.user;  // to access req.user in navbar.ejs for login, signup
  next();
});

// app.get("/demouser", async (req,res) => {
//   let fakeUser = new User({
//     email: "raghav@gmail.com",
//     username: "delta-student"
//   });

//   let registeredUser = await User.register(fakeUser, "helloworld");  // to register a new user instance with a given password. Checks if username is unique
//   res.send(registeredUser);
// });

app.use("/listings", listingRouter);   // restructuring routes (listings) ("/listings" is common part)
app.use("/listings/:id/reviews", reviewRouter);  // restructuring routes (reviews) ("/listings/:id/reviews" is common part)
app.use("/", userRouter);

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err) );

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.listen(8080, () => {
  console.log("listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("<b>Hi!, Welcome to Wanderlust</b>");
});

app.all("*", (req,res,next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err,req,res,next) => {        // Error Handling Middleware
  // res.send("something went wrong!");

  let {statusCode = 500, message = "Something went wrong!!!"} = err;
  res.status(statusCode).render("error.ejs", {err});  // styling our error page
  // res.status(statusCode).send(message);
});