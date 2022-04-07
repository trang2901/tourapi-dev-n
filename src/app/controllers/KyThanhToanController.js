
const KyThanhToan = require('../models/KyThanhToan');
class KyThanhToanController {
    // [GET] /KyThanhToan
    show(req, res) {
        KyThanhToan.find({})
            .lean()
            .then(KyThanhToans => res.json(KyThanhToans))
            .catch(err => {
                message: err
            });
    }
    
    // [GET] /KyThanhToan/:id
    detail(req, res) {
        KyThanhToan.findOne({ _id: req.params.id })
            .lean()
            .then(KyThanhToans => res.json(KyThanhToans))
            .catch(err => {
                message: err
            });
    }

    //[POST] /KyThanhToan
    create(req, res) {
        const kyThanhToan = new KyThanhToan(req.body);
        kyThanhToan.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /KyThanhToan/:id
    update(req,res){
        KyThanhToan.findByIdAndUpdate(req.params.id,req.body)
            .lean()
            .then(dataUpdate=>res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /KyThanhToan/:id
    delete(req,res){
        KyThanhToan.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete=>res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports = new KyThanhToanController;