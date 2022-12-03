const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const LoaiTour=new Schema({
    ten_loai_tour: String,
},{
    timestamps:true
})

module.exports=mongoose.model('loai_tour',LoaiTour);

