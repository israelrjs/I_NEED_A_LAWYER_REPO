module.exports = function(sequelize, DataTypes) {
  var lawyers = sequelize.define("Lawyers", {
    name: DataTypes.STRING,
    type: DataTypes.TEXT,
    zipcode: DataTypes.STRING,
    phoneNumber: DataTypes.TEXT,
    State: DataTypes.STRING,
    img: DataTypes.BLOB
  });
  return lawyers;
};
