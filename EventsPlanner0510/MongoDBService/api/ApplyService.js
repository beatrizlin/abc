var express = require('express');
var mongoose = require("mongoose");
var apply = require("../models/apply.js")
var apirouter = express.Router();
//=================================
apirouter.route("/applies").get(function (req, res) {
    apply.find(function (err, applies) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(applies);
        }
    });
});

apirouter.route('/applies/:aemail').get(
    function (req, res) {
        apply.find({ aemail: req.params.aemail }, function (
            err, apply) {
            if (err)
                res.send(err);
            res.json(apply);
        });
    });

apirouter.route('/applies').post(function (req, res) {
    var p = new apply();
    p.aemail = req.body.aemail;
    p.atitle = req.body.atitle;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: "活動報名新增成功!" });
        };
    });
});

    apirouter.route('/applies').put(function (req, res) {
        apply.updateOne({ aemail: req.body.aemail },
            {
                aemail: req.body.aemail,
                atitle: req.body.atitle,
            },
            function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(result);
                }
            });
    });

    apirouter.route('/applies/:aemail').delete(
        function (req, res) {
            apply.remove({ aemail: req.params.aemail },
                function (err, apply) {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: '成功刪除' });
                });
        });

    //================================

module.exports = apirouter;