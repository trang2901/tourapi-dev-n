const mongoose=require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema=mongoose.Schema;
const Tour=new Schema({
    ten: String,
    gia:String,
    khoi_hanh:String,
    nguoi_hd:{ type: Schema.Types.ObjectId, ref: 'huong_dan_vien' },
    so_cho:String,
    so_ngay:String,
    du_khach:[{ type: Schema.Types.ObjectId, ref: 'du_khach' }],
    lich_trinh:[{ type: Schema.Types.ObjectId, ref: 'lich_trinh' }],
    slug: { type: String, slug: 'ten', unique: true, },
    hinh:[String],
    trangthai: String,
    matour: String,
    khachsan: String,
    amthuc: String,
    phuongtien: String,
    diemkhoihanh: String,
    diemnoibat: String,
    thoigian: String,
    chitietlichtrinh: String, 
    ngay_dang_ky_cuoi_cung: String,
    ngay_thanh_toan_cuoi_cung: String,
    loai_tour: {type: Schema.Types.ObjectId, ref: 'loai_tour' }
},{
    timestamps:true
})

mongoose.plugin(slug);

module.exports=mongoose.model('tour',Tour);

