
const Mail = require('../models/Mail');

const creds = require('../../credential.json');
let nodemailer = require('nodemailer');
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
                const mailOptions = {
                    from : 'DorisTour',
                    to : req.body.email,
                    subject:'DorisTour đã tạo đơn hàng của Anh/Chị',
                    html: `
                    <p style={{color: 'red'}}>Kính chào quý khách!</p><br />
                    Email này được gửi từ Doristour!<br /><br />
                    'Cảm ơn bạn đã cho chúng tôi cơ hội được phục vụ!'
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