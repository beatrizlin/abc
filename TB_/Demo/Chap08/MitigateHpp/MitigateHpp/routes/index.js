'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log('Query Parameters : ' + JSON.stringify(req.query));
    console.log('Polluted Query Parameters : ' + JSON.stringify(req.queryPolluted));
    res.render('index', { title: 'Express' });
});

module.exports = router;
