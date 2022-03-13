const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const ThanhToan=new Schema({
    id_khach_hang: {type:Schema.Types.ObjectId,ref:'khach_hang'},
    id_tour:{ type: Schema.Types.ObjectId, ref: 'tour' },
    giam_gia: String,
    thanh_tien:String,
    phuong_thuc_tt:String,
    ky_thanh_toan:[{ type: Schema.Types.ObjectId, ref: 'ky_thanh_toan' }],
    nguoi_duyet:{ type: Schema.Types.ObjectId, ref: 'admin' },
    trang_thai_duyet:String
},{
    timestamps:true
});

module.exports=mongoose.model('thanh_toan',ThanhToan);

