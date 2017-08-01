var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });

    });
});
// Post route where user can create burgers
router.post("/", function(req, res) {
            db.Burger.create({
                burger_name: req.body.burger_name
            });
            // PUT Route to update status to consumed
            router.put("/:id", function(req, res) {
                db.Burger.update({
                    consumed: true
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then(function() {
                    res.redirect("/")
                });
            });

            router.delete("/:id", function(req, res) {
                db.Burger.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(function() {
                    res.redirect("/")
                })
            });


     });  

         // Export routes for server.js to use.
            module.exports = router;