
const Mail = require('../models/Mail');
class MailController {
    // [GET] /diadiem
    show(req, res) {
        Mail.find({})
            .lean()
            .then(mails => res.json(mails))
            .catch(err => {
                message: err
            });
    }

    //[POST] /diadiem
    create(req, res) {
        const mails = new Mail(req.body);
        mails.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })
    }

}

module.exports = new MailController;