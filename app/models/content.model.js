module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define("content", {
    content: {
      type: DataTypes.TEXT,
    },
    description:{
      type: DataTypes.TEXT,
    },
    title:{
      type: DataTypes.STRING,
    },
    is_approved: {
      type: DataTypes.STRING,
    },
    picture_location: {
      type: DataTypes.STRING,
    },
    picture_url: {
      type: DataTypes.STRING,
    },
    source:{
      type:DataTypes.STRING,
    },
    source_url:{
      type:DataTypes.STRING,
    }
    });

  return Content;
};
