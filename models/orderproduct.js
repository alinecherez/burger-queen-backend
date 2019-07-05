'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    orderId: DataTypes.NUMBER,
    productId: DataTypes.NUMBER
  }, {});
  OrderProduct.associate = function(models) {
    OrderProduct.belongsTo(models.Products, {
      foreignKey: "productId"
    });
    OrderProduct.belongsTo(models.Orders, {
      foreignKey: "orderId"
    });
  };
  return OrderProduct;
};