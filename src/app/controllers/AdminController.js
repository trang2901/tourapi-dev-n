
const Admin=require('../models/Admin');
class AdminController{
    // [GET] /admin
    show(req,res){
        Admin.find({})
            .populate('id_tai_khoan')
            .lean()
            .then(admin=>res.json(admin))
            .catch(err=>{
                message:err
            });
    }

    // [GET] /admin
    detail(req,res){
        Admin.findById(req.params.id)
            .populate('id_tai_khoan')
            .lean()
            .then(admin=>res.json(admin))
            .catch(err=>{
                message:err
            });
    }

    //[POST] /admin
    create(req, res) {
        const ad = new Admin(req.body);
        ad.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [PUT] /admin/:id
    update(req,res){
        Admin.findByIdAndUpdate(req.params.id,req.body)
            .lean()
            .then(dataUpdate=>res.json(dataUpdate))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

    // [DELETE] /admin/:id
    delete(req,res){
        Admin.findByIdAndDelete(req.params.id)
            .lean()
            .then(dataDelete=>res.json(dataDelete))
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }
}

module.exports=new AdminController;