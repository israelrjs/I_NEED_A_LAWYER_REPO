module.exports = function(sequelize, DataTypes) {
  var lawyers = sequelize.define("Lawyers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: "Name Field Cannot Be Empty" } }
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "You Need To Specify What You Specialize In" }
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: "Zipcode Field Cannot Be Empty" } }
    },
    phoneNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: { msg: "Phone Number Field Cannot be Empty" } }
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: "State Has To Be Specified" } }
    },
    img: { type: DataTypes.BLOB },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "Email is Invalid" },
        notEmpty: { msg: "Email Field Cannot be empty" }
      }
    },
    password: { type: DataTypes.STRING }
  });

  var client = sequelize.define("client", {
    name: DataTypes.STRING,
    type: DataTypes.TEXT,
    zipcode: DataTypes.STRING,
    phoneNumber: DataTypes.TEXT,
    State: DataTypes.STRING,
    img: DataTypes.BLOB
  });
  return client, lawyers;
};
