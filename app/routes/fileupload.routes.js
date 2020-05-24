module.exports = app => {
  const files = require("../controllers/files.controller.js");

  var router = require("express").Router();

  // Create a new Category
  router.post("/upload_photos", files.upload_one);



  app.use('/api/files', router);
};
