var mongoose=require("mongoose");

// var UserSchemaObj=new mongoose.Schema({
//     uid :{type:String,index:true,unique:true,required:true},
//         pwd : String,
//         mob: String,
//         dos: {type:Date,default:Date.now }
       
// });

var UserSchemaObj=new mongoose.Schema({
    uid :String,
        pwd : String,
        mob: String,
        dos: {type:Date,default:Date.now }
       
});



var UserModel=mongoose.model("Users",UserSchemaObj);

module.exports=UserModel;