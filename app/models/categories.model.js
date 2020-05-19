module.exports = (sequelize, Sequelize) => {
  const Categories = sequelize.define("category", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return Categories;
};
