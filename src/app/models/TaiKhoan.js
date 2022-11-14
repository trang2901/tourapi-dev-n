const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const TaiKhoan=new Schema({
    username: String,
    password: String,
    diachi: String,
    hoten: String,
    sodienthoai: String,
    email: String
},{
    timestamps:true
})

module.exports=mongoose.model('tai_khoan',TaiKhoan);

