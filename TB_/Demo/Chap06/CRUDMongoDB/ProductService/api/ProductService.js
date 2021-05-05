var express = require('express');
var product = require("../models/product.js")
//==================
var apirouter = express.Router();

apirouter.route("/products").get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.json(products);
    });
});

apirouter.route('/products/:title').get(
    function (req, res) {
        product.find({title:req.params.title}, function (
            err, prod) {
            if (err)
                res.send(err);
            res.json(prod);
        });
    });

apirouter.route("/products").post(function (req, res) {
    var p = new product();
    p.title = req.body.title;
    p.price = req.body.price;
    p.instock = req.body.instock;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "商品新增成功!" });
    });
});

apirouter.route('/products/').put(function (req, res) {
    product.updateOne({ title: req.body.title },
        { title: req.body.title, price: req.body.price, instock: req.body.instock },
        function (err,result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
});

apirouter.route('/products/:title').delete(
    function (req, res) {
        product.remove({ title: req.params.title },
            function (err, prod) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted' });
            });
    });

//==================
module.exports = apirouter;