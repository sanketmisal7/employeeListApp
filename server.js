var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('employeelist', ['employeeList']);
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/employeeList', function(req, res) {
    console.log("received get request");
    db.employeelist.find(function(err, docs){
        // console.log(docs);
        res.json(docs);
    });
});

app.post('/employeeList', function(req, res) {
    // console.log(req.body);
    db.employeelist.insert(req.body, function(err, doc){
        res.json(doc);
    })
})
app.delete('/employeeList/:id', function(req, res){
    var id = req.params.id;
    // console.log(id);
    db.employeelist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
})

app.get('/employeeList/:id', function(req, res){
    var id = req.params.id;
    // console.log(id);
    db.employeelist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});
app.put('/employeeList/:id', function(req, res){
    var id = req.params.id;
    // console.log(req.body.name);
    db.employeelist.findAndModify({query: {_id: mongojs.ObjectId(id)},
        update: {$set: {name: req.body.name, email: req.body.email, age: req.body.age}},
        new: true}, function(err, doc) {
            res.json(doc);
        })
});
app.listen(3000);
console.log("server running on port 3000")