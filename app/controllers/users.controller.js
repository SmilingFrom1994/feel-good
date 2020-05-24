const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial

exports.create = (req, res) => {
console.log(req.body);
// Validate request

if(!req.body.email) {
  res.status(400).send({
    message: "Email id not supplied"
  });
  return;
}
// Create a Tutorial
  const users = {
    facebook:req.body.facebook,
    gmail:req.body.gmail,
    role: req.body.role,
    email: req.body.email
  };

console.log(users);
  // Save Tutorial in the database
  Users.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating User."
      });
    });
};


// Retrieve all Tutorials from the database.

exports.findAll = (req, res) => {
  Users.findAll({})
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

  Users.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};



// Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;
//
//   Categories.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Category was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Category with id=" + id
//       });
//     });
// };
//
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;
//
//   Categories.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Category was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Category with id=" + id
//       });
//     });
// };
//
// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Categories.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Categories were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all categories."
//       });
//     });
// };
