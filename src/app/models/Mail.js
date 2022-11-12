const mongoose=require('mongoose');
const slug = require('mongoose-slug-generator');
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

mongoose.plugin(slug);

module.exports=mongoose.model('mail',Mail);

