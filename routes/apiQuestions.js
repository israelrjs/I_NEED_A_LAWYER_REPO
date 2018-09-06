var db = require("../models");
module.exports = function(app) {
  // Get New Question
  app.get("/api/questions", function(req, res) {
    db.questions.findAll({}).then(function(dbquestions) {
      res.json(dbquestions);
    });
  });
  // Create New Question
  app.post("/api/questions", function(req, res) {
    db.questions
      .create(req.body)
      .then(function(dbquestions) {
        res.json(dbquestions);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
};
