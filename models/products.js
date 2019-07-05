'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProduct, {
      foreignKey: "productId"
    })
  };

  // Products.create({name: "hamburger", price: 10});
  // Products.create({name: "suco", price: 5});
  // Products.create({name: "refrigerante", price: 4});
  // Products.create({name: "batata frita", price: 5});
  // Products.create({name: "anel de cebola", price: 5});
  // Products.create({name: "cheeseburger", price: 10});
  
  return Products;
};