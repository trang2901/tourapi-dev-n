
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

                //gửi mail
                const mailOptions = {
                    from : 'DorisTour',
                    to : req.body.id_khach_hang.email,
                    subject:'DORISTOUR ĐÃ TẠO ĐƠN CỦA ANH/CHỊ',
                    html: `
                    DorisTour kính chào quý khách!<br />
                    Rất cảm ơn quý khách hàng đã cho chúng tôi cơ hội được phục vụ.<br /><br />
                    DorisTour đã tiếp nhận đơn đặt tour của bạn. <br />
                    Sẽ mất 1-2 tiếng làm việc để chúng tôi kiểm tra và đối soát đơn của bạn và xác nhận đơn của bạn trong thời gian sớm nhất. <br />
                    <b>Xin quý khách lưu ý: </b> Đây là Email xác nhận Đơn đặt tour của quý khách! Vui lòng không trả lời mail này. <br />
                    Nếu bạn có bất kỳ thắc mắc nào, xin vui lòng liên hệ với chúng tôi qua đường dây nóng: 0394075201
                    <br/>
                    Trân trọng,
                    <br />
                    <b>DorisTour Team</b>
    
                    `
                }
                transporter.sendMail(mailOptions, (err, data) => {
                    if(err){
                        res.json({
                            status:"err"
                        }) 
                        console.log(err)
                        }
                        else {
                            res.json({
                                status: "success"
                     })
                     console.log("Email Sent" + data.response)
                    }
                })
            
                transporter.verify(function(error, success) {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log("Server is ready to take our messages!");
                    }
                  });
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