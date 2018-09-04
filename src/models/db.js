const Sequelize = require('sequelize')
const { DataTypes } = Sequelize

const db = new Sequelize(
    'sampleblogdb', 'samplebloguser', 'sampleblogpass',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = {
    db
}