import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.get("/", (res, req) => {
  res.send("home page");
});
app.get("/contactus", (res, req) => {
  res.send("contact us");
});
app.get("/ourservices", (res, req) => {
  res.send("our services");
});
app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res
      .status(403)
      .send(
        "Sorry, this web application is only available during working hours (Monday to Friday, from 9 to 17)"
      );
  }
};

// use the middleware function for all routes
app.use(checkWorkingHours);
