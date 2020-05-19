module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define("content", {
    content: {
      type: DataTypes.STRING,
    },
    is_approved: {
      type: DataTypes.STRING,
    },
    picture_location: {
      type: DataTypes.STRING,
    }
    });

  return Content;
};