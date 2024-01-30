const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dams").then(()=>{
    console.log("database connect");
}).catch((e) => {
    console.log(e);
}) 
const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const Usermodel = mongoose.model("user", schema);
module.exports = Usermodel;

