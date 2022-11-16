const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Mail=new Schema({
    hoten: String,
    email: String,
    tongtien: String,
    sodienthoai: String, 
    ngaydattour: String,
},{
    timestamps:true
})

module.exports=mongoose.model('mail',Mail);

