
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
    //   var email = req.body.email
    //   var message = req.body.message
    //   var subject = req.body.subject
    //   var name = req.body.name
    //   var company = req.body.company

      const mailOptions = {
        from : 'DorisTour',
        to : req.body.email,
        subject:  req.body.subject,
        html: `Xin chào, This email from Doristour <noreply@.com> <br /><br /> 'Cảm ơn bạn đã cho chúng tôi cơ hội được phục vụ!'`
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
  console.log(app);
  console.log(app.get(db), (req, res) =>
      {
          res.send(db);
      });

        

    }



}

module.exports = new MailController;