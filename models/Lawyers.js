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
    img: { type: DataTypes.STRING },
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

  return lawyers;
};
