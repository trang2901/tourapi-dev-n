
const ThanhToan = require('../models/ThanhToan');
class ThanhToanController {
    // [GET] /ThanhToan
    show(req, res) {
        ThanhToan.find({})
            .populate('id_khach_hang')
            .populate('id_tour')
            .populate('ky_thanh_toan')
            .populate('nguoi_duyet')
            .lean()
            .then(ThanhToans => res.json(ThanhToans))
            .catch(err => {
                message: err
            });
    }

    // [GET] /ThanhToan/:id
    detail(req, res) {
        ThanhToan.findOne({ _id: req.params.id })
            .populate('id_khach_hang')
            .populate('id_tour')
            .populate('ky_thanh_toan')
            .populate('nguoi_duyet')
            .lean()
            .then(ThanhToans => res.json(ThanhToans))
            .catch(err => {
                message: err
            });
    }

    //[POST] /ThanhToan
    create(req, res) {
        const thanhToan = new ThanhToan(req.body);
        thanhToan.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /ThanhToan/:id
    update(req, res) {
        ThanhToan.findByIdAndUpdate(req.params.id, req.body)
            .lean()
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /ThanhToan/:id
    delete(req, res) {
        ThanhToan.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete => res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new ThanhToanController;