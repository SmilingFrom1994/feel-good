const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');




const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Hope application." });
});
require("./app/routes/categories.routes")(app);
require("./app/routes/content.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/fileupload.routes")(app);
require("./app/routes/autoContent.routes")(app);

// set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);


});
