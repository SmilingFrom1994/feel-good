module.exports = app => {
  const users = require("../controllers/users.controller.js");

  var router = require("express").Router();

  // Create a new Category
  router.post("/", users.create);

  // Retrieve all Categories
  router.get("/", users.findAll);

  // Retrieve a single Category with id
  router.get("/:id", users.findOne);

  // Update a Category with id
  //router.put("/:id", users.update);

  // Delete a Category with id
  //router.delete("/:id", users.delete);

  // Create a new Category
  //router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};
