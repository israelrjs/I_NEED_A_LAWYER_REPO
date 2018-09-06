var db = require("../models");

module.exports = function(app) {
  // Get all Lawyers
  app.get("/api/lawyers", function(req, res) {
    db.Lawyers.findAll({}).then(function(dlawyers) {
      res.json(dlawyers);
    });
  });

  // Create a new Lawyer
  app.post("/api/lawyers", function(req, res) {
    db.Lawyers.create(req.body)
      .then(function(dlawyers) {
        res.json(dlawyers);
      })
      .catch(function(err) {
        showError(err);
        res.json(err);
      });
  });
  app.post("/api/questions/:id", function(req, res) {
    db.questions
      .create({ where: { id: req.params.id } })
      .then(function(dbquestions) {
        res.json(dbquestions);
      });
  });
};
