var mongoose=require("mongoose");
var express=require("express");
var path=require("path");
var ReactRouter=require("./Routes/ReactRouter");
var bodyparser=require("body-parser");
var cors=require("cors");


var PORT=process.env.PORT || 8000;
var app=express();
app.use(cors());
app.use(bodyparser.json());
app.use("/react",ReactRouter);
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../testapp/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../testsapp/build'))
})


app.listen(PORT,()=>{
    console.log("Server Started");
});

