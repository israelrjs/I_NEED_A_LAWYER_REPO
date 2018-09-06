module.exports = function(sequelize, DataTypes) {
  const questions = sequelize.define("questions", {
    Username: DataTypes.STRING,
    Question: DataTypes.TEXT,
    Answer: DataTypes.STRING
  });
  return questions;
};
