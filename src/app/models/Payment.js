const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Payment=new Schema({
    amount: String, 
    id: String
},{
    timestamps:true
})

module.exports=mongoose.model('payment',Payment);