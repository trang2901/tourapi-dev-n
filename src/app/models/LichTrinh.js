const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const LichTrinh=new Schema({
    id_dia_diem:{ type: Schema.Types.ObjectId, ref: 'dia_diem' },
    trang_thai: String,
    dich_vu:String,
    su_co:String,
    ngay_o:String,
    chitiet: String,
    noinghichan: String,
    chitietlichtrinh: [String],
},{
    timestamps:true
});

module.exports=mongoose.model('lich_trinh',LichTrinh);

