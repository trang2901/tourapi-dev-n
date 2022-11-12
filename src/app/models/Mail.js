const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Mail=new Schema({
    name: String,
    email: String,
    message: String,
    subject: String, 
    company: String
},{
    timestamps:true
})

module.exports=mongoose.model('mail',Mail);

