// task 1
console.log("HELLO WORLD");
// task 2
// import fs from "fs";
// import http from "http";

// //dotenv.config();
// const fs = require("fs");
// const http = require("http");
// require("dotenv").config();
// const server = http.createServer((req, res) => {
//   fs.readFile("file.txt", (err, data) => {
//     if (err) throw err;
//     res.end(data.toString());
//   });
// });

// server.listen(process.env.PORT, () => {
//   console.log(`server started at port ${process.env.PORT}`);
// });
const fs = require("fs");
const http = require("http");
require("dotenv").config();

const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    res.end(data.toString());
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});
