
const HuongDanVien = require('../models/HuongDanVien');
class HuongDanVienController {

    // [GET] /huongdanvien
    show(req, res) {
        HuongDanVien.find({})
            .populate('id_tai_khoan')
            .lean()
            .then(hdv => res.json(hdv))
            .catch(err => {
                message: err
            });
    }

    // [GET] /huongdanvien/id
    detail(req, res) {
        HuongDanVien.findById(req.params.id)
            .populate('id_tai_khoan')
            .lean()
            .then(hdv => res.json(hdv))
            .catch(err => {
                message: err
            });
    }

    // [POST] /huongdanvien
    create(req, res) {
        const hdv = new HuongDanVien(req.body);
        hdv.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /huongdanvien/:id
    update(req,res){
        HuongDanVien.findByIdAndUpdate(req.params.id,req.body)
            .lean()
            .then(dataUpdate=>res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /huongdanvien/:id
    delete(req,res){
        HuongDanVien.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete=>res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new HuongDanVienController;