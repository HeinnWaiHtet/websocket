let express = require("express");

/**
 * app setup
 */
let app = express();

/** server setup */
let server = app.listen(4000, () => {
  console.log("localhost:4000 is running");
});

/** route setup */
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});
