'use strict';
module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render("pages/index");
    });

    router.get('/about', function (req, res) {
        res.render("pages/about");
    });

    router.get('login', function (req, res) {
        res.render("pages/login");
    });

    router.get('/:user', function (req, res) {
        var user = req.params.user;
        res.render("pages/passdata", { username: user });
    });
};