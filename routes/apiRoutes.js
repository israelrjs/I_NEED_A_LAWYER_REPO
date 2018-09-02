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
    db.Lawyers.create(req.body)
      .then(function(dblawyers) {
        res.json(dblawyers);
      })
      .catch(function(err) {
        // console.log(err);
        res.json(err);
      });
  });
};
