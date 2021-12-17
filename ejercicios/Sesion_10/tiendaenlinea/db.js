const Sequilize = require('sequelize')

// Exporting models
const Product = require('./models/Product');
const Review = require('./models/Review');
const Order = require('./models/Order');
const User = require('./models/User');

// Database connection
const sequelize = new Sequilize('tienda_linea','tienda_linea','t13nd4-l1n3a$',{
    host:'localhost',
    dialect: 'mariadb',
    logging: false
})

const models = [Product, Review, User, Order]

for(let model of models){
    model(sequelize)
}

const {products, reviews, users, orders} = sequelize.models
reviews.belongsTo(products)
orders.belongsTo(users)
orders.belongsTo(products)

module.exports = sequelize