var db = require("../models");

module.exports = function(app) {
  // Get all Lawyers
  app.get("/api/lawyers", function(req, res) {
    db.Lawyers.findAll({}).then(function(dblawyers) {
      res.json(dblawyers);
    });
  });

  // Create a new Lawyer
  app.post("/api/lawyers", function(req, res) {
    db.Lawyers.create(req.body).then(function(dblawyers) {
      res.json(dblawyers);
    });
  });

  // Delete
  app.delete("/api/lawyers/:id", function(req, res) {
    db.Lawyers.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dblawyers);
    });
  });
};
