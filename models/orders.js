'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    UID: DataTypes.NUMBER
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.User, {
      foreignKey: "UID"
    });
    Orders.hasMany(models.OrderProduct, {
      foreignKey: "orderId"
    })
  };
return Orders;
};