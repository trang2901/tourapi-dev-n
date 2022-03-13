const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const KyThanhToan=new Schema({
    ngay_het_han: String,
    hinh_thuc:String,
    giam_gia:String,
    gia_goc:String,
    thanh_tien:String,
    trang_thai:String,
},{
    timestamps:true
})

module.exports=mongoose.model('ky_thanh_toan',KyThanhToan);

