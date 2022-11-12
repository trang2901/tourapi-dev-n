const express=require('express');
const route=require('./routers');
const app=express();
var cors = require('cors');
const path=require('path');

// const creds = require('./credential.json');
// let nodemailer = require('nodemailer');

app.use(cors());
const port= process.env.PORT || 3000;

//Connect to database
const db=require('./app/config/db');
const { Server } = require('http');
db.connect();


//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware

// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", 
//       port: 587,
//       secure: false,
//     // service: 'Gmail',
//     auth: {
//       user: creds.auth.user,
//       pass: creds.auth.pass 
//     },
//   });
  
  // app.post('https://tourapi-dev-n.herokuapp.com/mail', (req, res, next) => {
  //     var email = req.body.email
  //     var message = req.body.message
  //     var subject = req.body.subject
  //     var name = req.body.name
  //     var company = req.body.company
  
  //     const mailOptions = {
  //         from :  name,
  //         to : email,
  //         subject: subject,
  //         html: `${name} from ${company} <noreply@${name}.com> <br /><br /> ${message}`
  //     }
  
  //     transporter.sendMail(mailOptions, (err, data) => {
  //         if(err){
  //             res.json({
  //                 status:"err"
  //             }) 
  //             console.log(err)
  //             }
  //             else {
  //                 res.json({
  //                     status: "success"
  //          })
  //          console.log("Email Sent" + data.response)
  //         }
  //     })
  // })
  
//   transporter.verify(function(error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Server is ready to take our messages!");
//       }
//     });
// console.log(app);
// console.log(app.get(db), (req, res) =>
//     {
//         res.send(db);
//     });


//Init Router
route(app);
app.listen(port);

