'use strict';
module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render("pages/index");
    });

    router.get('login', function (req, res) {
        res.render("pages/login");
    });

    router.get('/apply', function (req, res) {
        res.render("pages/apply");
    });

    router.get('/:user', function (req, res) {
        var user = req.params.user;
        res.render("pages/passdata", { username: user });
    });
};