
const Mail = require('../models/Mail');

const creds = require('../../credential.json');
let nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
      port: 587,
      secure: false,
    // service: 'Gmail',
    auth: {
      user: creds.auth.user,
      pass: creds.auth.pass 
    },
  });
transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: '../views/'
}));
// app.post('https://tourapi-dev-n.herokuapp.com/mail', (req, res, next) => {
//       var email = req.body.email
//       var message = req.body.message
//       var subject = req.body.subject
//       var name = req.body.name
//       var company = req.body.company
  
//       const mailOptions = {
//           from :  name,
//           to : email,
//           subject: subject,
//           html: `${name} from ${company} <noreply@${name}.com> <br /><br /> ${message}`
//       }
  
//       transporter.sendMail(mailOptions, (err, data) => {
//           if(err){
//               res.json({
//                   status:"err"
//               }) 
//               console.log(err)
//               }
//               else {
//                   res.json({
//                       status: "success"
//            })
//            console.log("Email Sent" + data.response)
//           }
//       })
//   })
  
  
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

    //[POST] /mail
    create(req, res) {
        const mails = new Mail(req.body);
        mails.save()
            .then(data => {
                //gửi mail
                const mailOptions = {
                    from : '"DREAMCASTERS " <dreamcasters29010502@gmail.com',
                    to : req.body.email,
                    subject:'DREAMCASTERS ĐÃ TẠO ĐƠN CỦA ANH/CHỊ',
                    html: `
                    <b>DREAMCASTERS</b> kính chào quý khách!<br />
                    Rất cảm ơn quý khách hàng đã cho chúng tôi cơ hội được phục vụ.<br /><br />
                    <b>DREAMCASTERS</b> đã tiếp nhận đơn đặt tour của bạn. <br />
                    <br />
                    Sẽ mất 1-2 tiếng làm việc để chúng tôi kiểm tra và đối soát đơn của bạn và xác nhận đơn của bạn trong thời gian sớm nhất. <br />
                    <b>Xin quý khách lưu ý: </b> Đây là Email xác nhận Đơn đặt tour của quý khách! Vui lòng không trả lời mail này. <br />
                    <br />
                    Nếu bạn có bất kỳ thắc mắc nào, xin vui lòng liên hệ với chúng tôi qua đường dây nóng: 0394075201
                    <br/><br/>
                    Trân trọng,
                    <br />
                    <b>DREAMCASTERS Team</b>
                    
    
                    `,
                  template: 'index'
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
                res.json(data);
            })
            .catch(err => {
                res.json({
                    message: err
                });
            })




    //   var email = req.body.email
    //   var message = req.body.message
    //   var subject = req.body.subject
    //   var name = req.body.name
    //   var company = req.body.company
//   console.log(app);
//   console.log(app.get(db), (req, res) =>
//       {
//           res.send(db);
//       });
    }



}

module.exports = new MailController;