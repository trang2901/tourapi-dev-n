const tourRouter=require('./tour');
const lichTrinhRouter=require('./lichTrinh');
const diaDiemRouter=require('./diaDiem');
const adminRouter=require('./admin');
const huongDanVienRouter=require('./huongDanVien');
const khachHangRouter=require('./khachHang');
const taiKhoanRouter=require('./taiKhoan');

function route(app){
    app.use('/tour',tourRouter);
    app.use('/lichtrinh',lichTrinhRouter);
    app.use('/diadiem',diaDiemRouter);
    app.use('/admin',adminRouter);
    app.use('/huongDanVien',huongDanVienRouter);
    app.use('/khachHang',khachHangRouter);
    app.use('/taiKhoan',taiKhoanRouter);
}

module.exports=route;