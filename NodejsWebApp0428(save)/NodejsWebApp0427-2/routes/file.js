var express = require('express');
var router = express.Router();

//===============================
router.route('/list').get(function (req, res) {
    res.render("pages/File/list");
});
//===============================

module.exports = router;