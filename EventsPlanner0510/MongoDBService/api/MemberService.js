var express = require('express');
var mongoose = require("mongoose");
var member = require("../models/member.js")
var apirouter = express.Router();
//=================================
apirouter.route("/members").get(function (req, res) {
    member.find(function (err, members) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(members);
        }
    });
});

apirouter.route('/members/:email').get(
    function (req, res) {
        member.find({ email: req.params.email }, function (
            err, member) {
            if (err)
                res.send(err);
            res.json(member);
        });
    });

apirouter.route('/members').post(function (req, res) {
    var p = new member();
    p.email = req.body.email;
    p.password = req.body.password;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: "會員新增成功!" });
        };
    });
});

    apirouter.route('/members').put(function (req, res) {
        member.updateOne({ member: req.body.member },
            {
                email: req.body.email,
                password: req.body.password,
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

    apirouter.route('/members/:email').delete(
        function (req, res) {
            member.remove({ email: req.params.email },
                function (err, email) {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: '成功刪除' });
                });
        });

    //================================

module.exports = apirouter;