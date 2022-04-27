
const KhachHang = require('../models/KhachHang');
const ThanhToan = require('../models/ThanhToan');

class KhachHangController {

    // [GET] /khachhang
    show(req, res) {
        KhachHang.find({})
            .populate('id_tai_khoan')
            .lean()
            .then(khachhangs => {
                var promise = khachhangs.map(khachhang => {
                    return ThanhToan.find({ id_khach_hang:khachhang['_id'] })
                        .populate('id_tour')
                        .then(thanhtoans => {
                            let tours_da_dat=thanhtoans.map(thanhtoan=>thanhtoan.id_tour);
                            khachhang.tours_da_dat = tours_da_dat;
                            return khachhang;
                        })
                })
                Promise.all(promise)
                    .then(khachhangs => res.json(khachhangs))
            })
            .catch(err => {
                message: err
            });
    }

    // [GET] /khachhang/:id
    detail(req, res) {
        KhachHang.findById(req.params.id)
            .populate('id_tai_khoan')
            .lean()
            .then(khachhang => {
                ThanhToan.find({ id_khach_hang:khachhang['_id'] })
                    .populate('id_tour')
                    .then(thanhtoans => {
                        let tours_da_dat=thanhtoans.map(thanhtoan=>thanhtoan.id_tour);
                        khachhang.tours_da_dat = tours_da_dat;
                        res.json(khachhang);
                    })
            })
            .catch(err => {
                message: err
            });
    }

    //[POST] /khachhang
    create(req, res) {
        const kh = new KhachHang(req.body);
        kh.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /khachhang/:id
    update(req, res) {
        KhachHang.findByIdAndUpdate(req.params.id, req.body)
            .lean()
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /khachhang/:id
    delete(req, res) {
        KhachHang.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete => res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new KhachHangController;