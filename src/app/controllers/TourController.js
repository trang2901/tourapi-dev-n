
const Tour = require('../../app/models/Tour');
class TourController {

    // [GET] /tour
    show(req, res) {
        Tour.find({})
            .populate({
                path: 'lich_trinh',
                populate: { path: 'id_dia_diem' }
            })
            .populate('nguoi_hd')
            .populate('khach_hang')
            .lean()
            .then(tours => res.json(tours))
            .catch(err => {
                message: err
            });
    }

    // [GET] /tour/:slug
     detail(req, res) {
        Tour.find({slug: req.params.slug})
            .populate({
                path: 'lich_trinh',
                populate: { path: 'id_dia_diem' }
            })
            .populate('nguoi_hd')
            .populate('khach_hang')
            .lean()
            .then(tours => res.json(tours))
            .catch(err => {
                message: err
            });
    }

    // [POST] /tour
    create(req, res) {
        const tour = new Tour(req.body);
        tour.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /tour/:id
    update(req, res) {
        Tour.findByIdAndUpdate(req.params.id, req.body)
            .lean()
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /tour/:id
    delete(req, res) {
        Tour.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete => res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new TourController;