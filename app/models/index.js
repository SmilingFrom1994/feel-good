const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require("./categories.model.js")(sequelize, Sequelize);
db.content = require("./content.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);

db.content.belongsTo(db.categories, {
   foreignKey: "categories_id",
});

db.content.belongsTo(db.users, {
  foreignKey: "users_id",
});


module.exports = db;
