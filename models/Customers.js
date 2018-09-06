module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    name: DataTypes.STRING,
    type: DataTypes.TEXT,
    zipcode: DataTypes.STRING,
    phoneNumber: DataTypes.TEXT,
    State: DataTypes.STRING,
    img: DataTypes.BLOB
  });
  return client;
};
