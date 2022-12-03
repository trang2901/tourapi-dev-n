const tourRouter=require('./tour');
const lichTrinhRouter=require('./lichTrinh');
const diaDiemRouter=require('./diaDiem');
const adminRouter=require('./admin');
const huongDanVienRouter=require('./huongDanVien');
const khachHangRouter=require('./khachHang');
const duKhachRouter=require('./duKhach');
const taiKhoanRouter=require('./taiKhoan');
const thanhToanRouter=require('./ThanhToan');
const kyThanhToanRouter=require('./KyThanhToan');
const mailRouter = require('./mail');
const paymentRouter = require('./payment');
const loaiTourRouter = require('./loaiTour')
function route(app){
    app.use('/tour',tourRouter);
    app.use('/lichtrinh',lichTrinhRouter);
    app.use('/diadiem',diaDiemRouter);
    app.use('/admin',adminRouter);
    app.use('/huongDanVien',huongDanVienRouter);
    app.use('/khachHang',khachHangRouter);
    app.use('/duKhach',duKhachRouter);
    app.use('/taiKhoan',taiKhoanRouter);
    app.use('/thanhtoan',thanhToanRouter);
    app.use('/kyThanhtoan',kyThanhToanRouter);
    app.use('/mail', mailRouter);
    app.use('/payment', paymentRouter);
    app.use('/loaitour', loaiTourRouter);
}

module.exports=route;