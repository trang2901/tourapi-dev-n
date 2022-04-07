
const LichTrinh = require('../models/LichTrinh');
class LichTrinhController {
    // [GET] /LichTrinh
    show(req, res) {
        LichTrinh.find({})
            .populate('id_dia_diem')
            .lean()
            .then(LichTrinhs => res.json(LichTrinhs))
            .catch(err => {
                message: err
            });
    }

    // [GET] /LichTrinh/:slug
    detail(req, res) {
        LichTrinh.findOne({ _id: req.params.id })
            .populate('id_dia_diem')
            .lean()
            .then(LichTrinhs => res.json(LichTrinhs))
            .catch(err => {
                message: err
            });
    }

    //[POST] /LichTrinh
    create(req, res) {
        const lichTrinh = new LichTrinh(req.body);
        lichTrinh.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /LichTrinh/:id
    update(req, res) {
        LichTrinh.findByIdAndUpdate(req.params.id, req.body)
            .lean()
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /LichTrinh/:id
    delete(req, res) {
        LichTrinh.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete => res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new LichTrinhController;