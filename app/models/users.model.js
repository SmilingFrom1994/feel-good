module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    facebook: {
      type: DataTypes.STRING,
    },
    gmail: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
    });

  return Users;
};
