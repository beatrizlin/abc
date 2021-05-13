//How to build a REST API to perform CRUD operation with Node.js, Express and MongoDB with example
//http://www.expertphp.in/article/how-to-build-a-rest-api-to-perform-crud-operation-with-node-js-express-and-mongodb
var productsModel = require('../model/Products.js');

exports.GetProducts = function (req, res) {    
    var searchStr = req.body.search.value;
    if(req.body.search.value)
    {
            var regex = new RegExp(req.body.search.value, "i")
            searchStr = { $or: [{'title':regex },{'price': regex},{'instock': regex }] };
    }
    else
    {
         searchStr={};
    }

    var recordsTotal = 0;
    var recordsFiltered=0;
    
    productsModel.count({}, function(err, c) {
        recordsTotal=c;
        console.log(c);
        productsModel.count(searchStr, function(err, c) {
            recordsFiltered=c;
            console.log(c);
            console.log(req.body.start);
            order=[[req.body.order[0].column, req.body.order[0].dir]]
            console.log(req.body.length);
            const columnLookup = {
                '0': 'title',
                '1': 'price',
                '2': 'instock'
            };
            order=[[columnLookup[req.body.order[0].column] , req.body.order[0].dir]]
            //productsModel.find(searchStr, 'title price instock',{'skip': Number( req.body.start), 'limit': Number(req.body.length)}).sort([['title', 'desc']]).exec(function (err, results) {
            productsModel.find(searchStr, 'title price instock',{'skip': Number(req.body.start), 'limit': Number(req.body.length)}).sort(order).exec(function (err, results) {
                    if (err) {
                        console.log('error while getting results'+err);
                        return;
                    }
            
                    var data = JSON.stringify({
                        "draw": req.body.draw,
                        "recordsFiltered": recordsFiltered,
                        "recordsTotal": recordsTotal,
                        "data": results
                    });
                    res.send(data);
                });        
          });
   });
};

exports.InsertProduct = function (req, res, next) {    
    var body = req.body;
    if(!body.data[0].title) {
        return res.status(400).send({
            message: "title can not be empty"
        });
    }

    // Create a productsModel
    var product = new productsModel({
        title: body.data[0].title, 
        price: body.data[0].price,
        instock:body.data[0].instock
    });

    // Save productsModel in the database
    product.save().then(product => {
        res.send({message: "product inserted successfully!"});
        next();
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong."
        });
    });
};

exports.UpdateProduct = function (req, res, next) {    
    var data = req.body.data;
    var key=Object.keys(data)[0];    
    if(!data[key].title) {
        return res.status(400).send({
            message: "title can not be empty"
        });
    }
     // Find product and update it with the request body
     productsModel.findByIdAndUpdate(data[key]._id, {
        title: body.data[0].title, 
        price: body.data[0].price,
        instock:body.data[0].instock
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "title does not exist"
            });
        }        
        res.send(product);
        next();        
    }).catch(err => {        
        return res.status(500).send({
            message: "Something went wrong"
        });
    });
};

exports.DeleteProduct = function (req, res, next) {    
    var data = req.query.data;
    var key=Object.keys(data)[0];    
    productsModel.findByIdAndRemove(data[key]._id)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product does not exist"
            });
        }
        res.send({message: "product deleted successfully!"});
        next();
    }).catch(err => {      
        return res.status(500).send({
            message: "Something went wrong"
        });
    });
};
