
const LoaiTour = require('../models/LoaiTour');
const Tour = require('../../app/models/Tour');
class LoaiTourController {
    // [GET] /DuKhach
    // show(req, res) {
    //     LoaiTour.find({})
    //         .lean()
    //         .then(loaitours => res.json(loaitours))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    //edit
    show(req, res) {
        LoaiTour.find({})
             .lean()
            .then(loaitours => {
                var promise = loaitours .map(loaitour => {
                    return Tour.find({ loai_tour: loaitour['_id'] })
                    .then(tour_t => {
                        loaitour.tour_t = tour_t;
                        return loaitour;
                    })
                })

                Promise.all(promise)
                    .then(loaitours => res.json(loaitours))
            })
            .catch(err => {
                message: err
            });
    }


    // [GET] /DuKhach/:id
    // detail(req, res) {
    //     LoaiTour.findById(req.params.id)
    //         .lean()
    //         .then(loaitour => res.json(loaitour))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    detail(req, res) {
        LoaiTour.findById(req.params.id)
            .lean()
            .then(loaitour => {
                Tour.find({ loai_tour: loaitour['_id'] })
                    .then(tour_t => {
                        loaitour.tour_t = tour_t;
                        res.json(loaitour);
                    })
            })
            .catch(err => {
                message: err
            });
    }


    // [POST] /DuKhach
    create(req, res) {
        const lt = new LoaiTour(req.body);
        lt.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /DuKhach/:id
    update(req, res) {
        LoaiTour.findByIdAndUpdate(req.params.id, req.body)
            .lean()
            .then(tk => res.json(tk))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /DuKhach/:id
    delete(req, res) {
        LoaiTour.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete => res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new LoaiTourController;