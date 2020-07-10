var fbref = require('../utils/utils');
var orders = [
    {"oid": 1,"name" : "Tomatoes", "item" : "vegetable","qty": 2,"price":200}
];

var path = "/orders";

var ordersobj = {
    "getall" : function(req,res){
        fbref.getAllObjects(path).then(success =>{
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
    "findByid" : function(req,res){
        console.log(req.query);
        let id = req.query.id;
        fbref.getObjectById(path,id).then(success=>{
            res.send(success);
        }).catch(error=> {
            res.send(error);
        })
    },
    "add" : function(req,res){
        var orObj=req.body;
        fbref.addObject(path,orObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    }
 
};

module.exports = ordersobj;
