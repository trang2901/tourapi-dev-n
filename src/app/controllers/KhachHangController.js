
const KhachHang = require('../models/KhachHang');
class KhachHangController {

    // [GET] /khachhang
    show(req, res) {
        KhachHang.find({})
            .populate('id_tai_khoan')
            .lean()
            .then(kh => res.json(kh))
            .catch(err => {
                message: err
            });
    }

    // [GET] /khachhang/:id
    detail(req, res) {
        KhachHang.findById(req.params.id)
            .populate('id_tai_khoan')
            .lean()
            .then(kh => res.json(kh))
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
    update(req,res){
        KhachHang.findByIdAndUpdate(req.params.id,req.body)
            .lean()
            .then(dataUpdate=>res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /khachhang/:id
    delete(req,res){
        KhachHang.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete=>res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new KhachHangController;