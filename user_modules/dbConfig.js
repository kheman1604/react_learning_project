var mongoose=require("mongoose");

const dbConfig = "mongodb+srv://KhemanJain:Kheman1604@cluster.qlg81.mongodb.net/db2020";
mongoose.connect(dbConfig, {useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true}).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err);
})

module.exports=dbConfig;