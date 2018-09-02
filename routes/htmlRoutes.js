var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Lawyers.findAll({}).then(function(dblawyers) {
      res.render("index", {
        msg: "Find a Lawyer",
        lawyers: dblawyers
      });
    });
  });

  app.get("/lawyers", function(req, res) {
    db.Lawyers.findAll({}).then(function(dblawyers) {
      res.render("Lawyers", {
        msg: "Find a Lawyer",
        lawyers: dblawyers
      });
    });
  });
  app.get("/addtodirectory", function(req, res) {
    res.render("addLawyers");
  });

  app.get("/lawyers/register", function(req, res) {
    res.render("userlogin");
  });
  app.post("/registered", function(req, res) {
    res.render("userlogin", { confirmation: "Registered" });
  });

  // app.get("/example/lawyers", function(req, res) {
  //   db.Lawyers.findOne({ where: { id: req.params.id } }).then(function(
  //     dblawyers
  //   ) {
  //     res.render("Lawyers", {
  //       lawyers: dblawyers
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
