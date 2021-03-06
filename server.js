var express = require("express");
var path = require("path");

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3304;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
