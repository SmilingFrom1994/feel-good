const db = require("../models");
const Contents = db.content;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
console.log(req.body);
// Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "content can not be empty!"
    });
    return;
  }
  else if (!req.body.categories_id){
    res.status(400).send({
      message: "Category id not supplied"
    });
    return;
  }

// Create a Tutorial
  const contents = {
    content: req.body.content,
    categories_id: req.body.categories_id,
    is_approved: "NO",
    picture_location:req.body.picture_location

  };

  // Save Tutorial in the database
  Contents.create(contents)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Content."
      });
    });
};


// Retrieve all Contents from the database with given content_id.

exports.findAll = (req, res) => {
  const categories_id = req.query.categories_id;
  var condition = categories_id ? { categories_id: { [Op.like]: `%${categories_id}%` } } : null;

  Contents.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};





// Find a single Tutorial with an id
exports.findOne = (req, res) => {
 const id = req.params.id;
console.log(req.params.id);
  Contents.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Content with id=" + id
      });
    });
};



// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Contents.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Contents.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Contents.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
};
