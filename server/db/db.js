const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABSE_URL || 'postgres://localhost:5432/_____', {
    logging: false,
});

//define Models


module.exports = db;