module.exports = app => {
  const newsApi = require("../controllers/newsapi.controller.js");

  var router = require("express").Router();

  // Create a new Category
  router.post("/", newsApi.headlines);



  app.use('/api/autoContent', router);
};
