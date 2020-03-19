const express=require('express')
const app=express()
const port=8080;
const bcrypt=require('bcrypt')
//const session=require('express-session');

var cors=require('cors');
var bodyParser=require('body-parser');



var MongoClient=require('mongodb').MongoClient;             //Mongodb Connection
var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo=db.db("admindb");
    dbo.createCollection("user",function(err,res){
        if(err) throw err;
        console.log("Collection created");
        db.close();
    });
});


app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());                 //json converted to object


