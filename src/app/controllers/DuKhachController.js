
const DuKhach = require('../models/DuKhach');
class DuKhachController {
    // [GET] /DuKhach
    show(req, res) {
        DuKhach.find({})
            .lean()
            .then(duKhachs => res.json(duKhachs))
            .catch(err => {
                message: err
            });
    }

    // [GET] /DuKhach/:id
    detail(req, res) {
        DuKhach.findById(req.params.id)
            .lean()
            .then(duKhach => res.json(duKhach))
            .catch(err => {
                message: err
            });
    }

    // [POST] /DuKhach
    create(req, res) {
        const duKhach = new DuKhach(req.body);
        duKhach.save()
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
    update(req,res){
        DuKhach.findByIdAndUpdate(req.params.id,req.body)
            .lean()
            .then(tk=>res.json(tk))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /DuKhach/:id
    delete(req,res){
        DuKhach.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete=>res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new DuKhachController;