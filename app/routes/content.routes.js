module.exports = app => {
  const contents = require("../controllers/content.controller.js");

  var router = require("express").Router();

  // Create a new Category
  router.post("/", contents.create);

  // Retrieve all Categories
  router.get("/", contents.findAll);

  // Retrieve a single Category with id
  router.get("/:id", contents.findOne);

  // Update a Category with id
  router.put("/:id", contents.update);

  // Delete a Category with id
  router.delete("/:id", contents.delete);

  // Create a new Category
  router.delete("/", contents.deleteAll);

  app.use('/api/content', router);
};
