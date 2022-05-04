
const Tour = require('../../app/models/Tour');
class TourController {

    // [GET] /tour
    show(req, res) {
        let query = {};
        if (req.query.hasOwnProperty('tag'))
            query = {
                tags: req.query.tag
            }
        Tour.find(query)
            .populate({
                path: 'lich_trinh',
                populate: { path: 'id_dia_diem' }
            })
            .populate('nguoi_hd')
            .populate('du_khach')
            .lean()
            .then(tours => {
                {
                    tours.map(tour => {
                        let hinh = [];
                        let tags = [];
                        let so_ngay = '0';
                        tour.lich_trinh.forEach(lichtrinh => {
                            hinh.push(lichtrinh.id_dia_diem.hinh);
                            tags.push(lichtrinh.id_dia_diem.tag);
                            so_ngay = parseInt(so_ngay) + parseInt(lichtrinh.ngay_o);
                        })
                        tour.hinh = hinh;
                        tour.tags = tags;
                        tour.so_ngay = so_ngay;
                    })
                    res.json(tours);
                }
            })
            .catch(err => {
                message: err
            });
    }
    // [GET] /tour/allTags
    showAllTags(req, res) {
        Tour.find({}, { tags: 1, _id: 0 })
            .lean()
            .then(data => {
                let tags = [];
                data.forEach(item => {
                    tags = tags.concat(item.tags);
                })
                let tagsDistinct = new Set(tags);
                tagsDistinct = Array.from(tagsDistinct);
                res.json(tagsDistinct);
            })
            .catch(err => {
                message: err
            });
    }
    // [GET] /tour/page
    showPage(req, res) {
        let page = req.params.page;
        let limitPage = req.query.limitPage || 4;
        Promise.all([
            Tour.find({})
                .populate({
                    path: 'lich_trinh',
                    populate: { path: 'id_dia_diem' }
                })
                .populate('nguoi_hd')
                .populate('du_khach')
                .lean()
                .skip((limitPage * page) - limitPage)
                .limit(limitPage),
            Tour.countDocuments()
        ])
            .then(([tours, totalDocument]) => res.json({
                tours,
                currentPage: page,
                totalPage: Math.ceil(totalDocument / limitPage)
            }))
    }

    // [GET] /tour/:slug
    detail(req, res) {
        Tour.findOne({ slug: req.params.slug })
            .populate({
                path: 'lich_trinh',
                populate: { path: 'id_dia_diem' }
            })
            .populate('nguoi_hd')
            .populate('du_khach')
            .lean()
            .then(tour => {
                let hinh = [];
                let tags = [];
                let so_ngay = '0';
                tour.lich_trinh.forEach(lichtrinh => {
                    hinh.push(lichtrinh.id_dia_diem.hinh);
                    tags.push(lichtrinh.id_dia_diem.tag);
                    so_ngay = parseInt(so_ngay) + parseInt(lichtrinh.ngay_o);
                })
                tour.hinh = hinh;
                tour.tags = tags;
                tour.so_ngay = so_ngay;
                res.json(tour);
            })
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
    // [PATCH] /tour/:id
    updatePatch(req, res) {
        var updateObject = req.body;
        var id = req.params.id;
        Tour.findByIdAndUpdate(id, { $set: updateObject })
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