var mongoose=require("mongoose");
var express=require("express");
var path=require("path");
var dbConn=require("../user_modules/dbConfig");// Config User Module for Mongodb
var UserModel=require("../Schemas/UserSchema");// UserModel is Returned by the Schema connected to Model 
var bodyparser=require("body-parser");

var app=express.Router();

app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"..","public")));

app.get("/save", async (req,resp)=>{
    console.log("Req-Received");
    console.log(req.query);
    await UserModel.create(req.query,(err,result)=>{
        if(err)
        {
                resp.send(err);
                return;
        }
        resp.set("json");
            resp.json(result);
            console.log(result);
        
    });
});


app.post("/save-post",async (req,resp)=>{
    console.log(JSON.stringify(req.body));
    await UserModel.create(req.body,(err,result)=>{
        if(err)
        {
            resp.send(err);
            return;
        }
        resp.send({"result":result,"msg":"success"});
        console.log(result);
    });
})

module.exports=app;