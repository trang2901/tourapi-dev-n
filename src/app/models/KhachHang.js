const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const KhachHang=new Schema({
    ho_ten: String,
    gioi_tinh:String,
    sdt:String,
    email:String,
    dia_chi:String,
    tuoi: String, 
    tendoanhnghiep: String,
    masothuedoanhnghiep: String,
    id_tai_khoan:{ type: Schema.Types.ObjectId, ref: 'tai_khoan' },
    so_cmnd: String
},{
    timestamps:true
})

module.exports=mongoose.model('khach_hang',KhachHang);

