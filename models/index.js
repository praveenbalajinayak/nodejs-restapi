
//const { Sequelize, Datatypes,Model }  = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('likhith', 'root', 'PRaveen@123', {
    host: '127.0.0.1',
    logging : false,
    dialect: 'mysql'
  });

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize; 

  db.contact =  require('./contact')(sequelize,DataTypes)
  db.user = require('./user')(sequelize,DataTypes,Model);

  db.sequelize.sync({ force: false });

  module.exports = db;