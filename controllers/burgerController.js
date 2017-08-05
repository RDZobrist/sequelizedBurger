var express = require('express');
var router = express.Router();
var db = require('../models');

//Grabs all the data from the burgers table...
router.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
    })
});

//User can enter a new burger into the system. Default values are already set for id, consumed=false, createdAt and updatedAt
router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});

//Changes status of burger from devoured=false to devoured=true
router.put("/:id", function(req, res) {
    db.Burger.update({
        consumed: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
});

 router.delete("/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.redirect('/');
    });
  });

module.exports = router;
