
const HuongDanVien = require('../models/HuongDanVien');
const Tour = require('../../app/models/Tour');
class HuongDanVienController {

    // [GET] /huongdanvien
    show(req, res) {
        HuongDanVien.find({})
            .populate('id_tai_khoan')
            .lean()
            .then(huongdanviens => {
                var promise = huongdanviens.map(huongdanvien => {
                    return Tour.find({ nguoi_hd: huongdanvien['_id'] })
                        .then(tour_hd => {
                            huongdanvien.tour_hd = tour_hd;
                            return huongdanvien;
                        })
                })
                Promise.all(promise)
                    .then(huongdanviens => res.json(huongdanviens))
            })
            .catch(err => {
                message: err
            });
    }

    // [GET] /huongdanvien/id
    detail(req, res) {
        HuongDanVien.findById(req.params.id)
            .populate('id_tai_khoan')
            .lean()
            .then(huongdanvien => {
                Tour.find({ nguoi_hd: huongdanvien['_id'] })
                    .then(tour_hd => {
                        huongdanvien.tour_hd = tour_hd;
                        res.json(huongdanvien);
                    })
            })
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
    update(req, res) {
        HuongDanVien.findByIdAndUpdate(req.params.id, req.body)
            .lean()
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /huongdanvien/:id
    delete(req, res) {
        HuongDanVien.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete => res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new HuongDanVienController;