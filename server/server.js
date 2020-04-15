const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const pkg = require("./package.json");
const port = process.env.PORT;

// add body parser so that we can get our data from the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// log each request for the fun of it
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.path}`);
  next();
});

// serve our api endpoints here
app.use("/api", routes);

// serve the client application here
app.use("/", express.static(path.join(__dirname, "app")));

// start the server up
app.listen(port, () => console.log(`${pkg.name} listening on port ${port}!`));
