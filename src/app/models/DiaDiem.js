const mongoose=require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema=mongoose.Schema;
const DiaDiem=new Schema({
    ten: String,
    hinh:Array,
    mo_ta:String,
    tinh_thanh:String,
    slug: { type: String, slug: 'ten', unique: true, },
},{
    timestamps:true
});

mongoose.plugin(slug);
module.exports=mongoose.model('dia_diem',DiaDiem);

