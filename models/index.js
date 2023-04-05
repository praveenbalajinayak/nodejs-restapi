
//const { Sequelize, Datatypes,Model }  = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('my_db', 'root', 'PRaveen123', {
    host: 'database-1.cln6eumkbt27.eu-north-1.rds.amazonaws.com',
    logging : false,
    dialect: 'mysql',
    dialectOptions: {
      ssl: 'Amazon RDS'
    }
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