
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
                    // html: `
                    // <b>DREAMCASTERS</b> kính chào quý khách!<br />
                    // Rất cảm ơn quý khđã cho chúng tôi cơ hội được phục vụ.<br /><br />
                    // <b>DREAMCASTERS</b> đã tiếp nhận đơn đặt tour của bạn. <br />
                    // <br />
                    // Sẽ mất 1-2 tiếng làm việc để chúng tôi kiểm tra và đối soát đơn của bạn và xác nhận đơn của bạn trong thời gian sớm nhất. <br />
                    // <b>Xin quý khách lưu ý: </b> Đây là Email xác nhận Đơn đặt tour của quý khách! Vui lòng không trả lời mail này. <br />
                    // <br />
                    // Nếu bạn có bất kỳ thắc mắc nào, xin vui lòng liên hệ với chúng tôi qua đường dây nóng: 0394075201
                    // <br/><br/>
                    // Trân trọng,
                    // <br />
                    // <b>DREAMCASTERS Team</b>
                    
    
                    // `,
                    html : 
                    `
                    <!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Document</title>

                                <style>
                                body{margin-top:20px;
                                    background:#eee;
                                    }
                                    
                                    /*Invoice*/
                                    .invoice .top-left {
                                        font-size:65px;
                                        color:#3ba0ff;
                                    }
                                    
                                    .invoice .top-right {
                                        text-align:right;
                                        padding-right:20px;
                                    }
                                    
                                    .invoice .table-row {
                                        margin-left:-15px;
                                        margin-right:-15px;
                                        margin-top:25px;
                                    }
                                    
                                    .invoice .payment-info {
                                        font-weight:500;
                                    }
                                    
                                    .invoice .table-row .table>thead {
                                        border-top:1px solid #ddd;
                                    }
                                    
                                    .invoice .table-row .table>thead>tr>th {
                                        border-bottom:none;
                                    }
                                    
                                    .invoice .table>tbody>tr>td {
                                        padding:8px 20px;
                                    }
                                    
                                    .invoice .invoice-total {
                                        margin-right:-10px;
                                        font-size:16px;
                                    }
                                    
                                    .invoice .last-row {
                                        border-bottom:1px solid #ddd;
                                    }
                                    
                                    .invoice-ribbon {
                                        width:85px;
                                        height:88px;
                                        overflow:hidden;
                                        position:absolute;
                                        top:-1px;
                                        right:14px;
                                    }
                                    
                                    .ribbon-inner {
                                        text-align:center;
                                        -webkit-transform:rotate(45deg);
                                        -moz-transform:rotate(45deg);
                                        -ms-transform:rotate(45deg);
                                        -o-transform:rotate(45deg);
                                        position:relative;
                                        padding:7px 0;
                                        left:-5px;
                                        top:11px;
                                        width:120px;
                                        background-color:#66c591;
                                        font-size:15px;
                                        color:#fff;
                                    }
                                    
                                    .ribbon-inner:before,.ribbon-inner:after {
                                        content:"";
                                        position:absolute;
                                    }
                                    
                                    .ribbon-inner:before {
                                        left:0;
                                    }
                                    
                                    .ribbon-inner:after {
                                        right:0;
                                    }
                                    
                                    @media(max-width:575px) {
                                        .invoice .top-left,.invoice .top-right,.invoice .payment-details {
                                            text-align:center;
                                        }
                                    
                                        .invoice .from,.invoice .to,.invoice .payment-details {
                                            float:none;
                                            width:100%;
                                            text-align:center;
                                            margin-bottom:25px;
                                        }
                                    
                                        .invoice p.lead,.invoice .from p.lead,.invoice .to p.lead,.invoice .payment-details p.lead {
                                            font-size:22px;
                                        }
                                    
                                        .invoice .btn {
                                            margin-top:10px;
                                        }
                                    }
                                    
                                    @media print {
                                        .invoice {
                                            width:900px;
                                            height:800px;
                                        }
                                    }

                                </style>
                            </head>
                        <body>
                        <b>DREAMCASTERS</b> kính chào quý khách!<br />
                                Rất cảm ơn ${req.body.hoten} đã cho chúng tôi cơ hội được phục vụ.<br /><br />
                                <b>DREAMCASTERS</b> đã tiếp nhận đơn đặt tour của bạn. <br /><br/>

                                Sẽ mất 1-2 tiếng làm việc để chúng tôi kiểm tra và đối soát đơn của bạn và xác nhận đơn của bạn trong thời gian sớm nhất. <br />
                                <br />
                                <b>Xin quý khách lưu ý: </b> Đây là Email xác nhận Đơn đặt tour của quý khách! Vui lòng không trả lời mail này. <br />
                                <br />
                                Nếu bạn có bất kỳ thắc mắc nào, xin vui lòng liên hệ với chúng tôi qua đường dây nóng: 0123456789
                                <br/><br/>
                                Trân trọng,
                                <br />
                                <b>DREAMCASTERS Team</b>
                                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
                                <div class="container bootstrap snippets bootdeys">
                                <div class="row">
                                  <div class="col-sm-12">
                                          <div class="panel panel-default invoice" id="invoice">
                                          <div class="panel-body">
                                            <div class="invoice-ribbon"><div class="ribbon-inner">PAID</div></div>
                                            <div class="row">
                                
                                                <div class="col-sm-6 top-left">
                                                    <i class="fa fa-rocket"></i>
                                                </div>
                                
                                                <div class="col-sm-6 top-right">
                                                        <h3 class="marginright">INVOICE-1234578</h3>
                                                        <span class="marginright">14 April 2014</span>
                                                </div>
                                
                                            </div>
                                            <hr>
                                            <div class="row">
                                
                                                <div class="col-xs-4 from">
                                                    <p class="lead marginbottom">From : Dynofy</p>
                                                    <p>350 Rhode Island Street</p>
                                                    <p>Suite 240, San Francisco</p>
                                                    <p>California, 94103</p>
                                                    <p>Phone: 415-767-3600</p>
                                                    <p>Email: contact@dynofy.com</p>
                                                </div>
                                
                                                <div class="col-xs-4 to">
                                                    <p class="lead marginbottom">To : John Doe</p>
                                                    <p>425 Market Street</p>
                                                    <p>Suite 2200, San Francisco</p>
                                                    <p>California, 94105</p>
                                                    <p>Phone: 415-676-3600</p>
                                                    <p>Email: john@doe.com</p>
                                
                                                </div>
                                
                                                <div class="col-xs-4 text-right payment-details">
                                                    <p class="lead marginbottom payment-info">Payment details</p>
                                                    <p>Date: 14 April 2014</p>
                                                    <p>VAT: DK888-777 </p>
                                                    <p>Total Amount: $1019</p>
                                                    <p>Account Name: Flatter</p>
                                                </div>
                                
                                            </div>
                                
                                            <div class="row table-row">
                                                <table class="table table-striped">
                                                  <thead>
                                                    <tr>
                                                      <th class="text-center" style="width:5%">#</th>
                                                      <th style="width:50%">Item</th>
                                                      <th class="text-right" style="width:15%">Quantity</th>
                                                      <th class="text-right" style="width:15%">Unit Price</th>
                                                      <th class="text-right" style="width:15%">Total Price</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td class="text-center">1</td>
                                                      <td>Flatter Theme</td>
                                                      <td class="text-right">10</td>
                                                      <td class="text-right">$18</td>
                                                      <td class="text-right">$180</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="text-center">2</td>
                                                      <td>Flat Icons</td>
                                                      <td class="text-right">6</td>
                                                      <td class="text-right">$59</td>
                                                      <td class="text-right">$254</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="text-center">3</td>
                                                      <td>Wordpress version</td>
                                                      <td class="text-right">4</td>
                                                      <td class="text-right">$95</td>
                                                      <td class="text-right">$285</td>
                                                    </tr>
                                                     <tr class="last-row">
                                                      <td class="text-center">4</td>
                                                      <td>Server Deployment</td>
                                                      <td class="text-right">1</td>
                                                      <td class="text-right">$300</td>
                                                      <td class="text-right">$300</td>
                                                    </tr>
                                                   </tbody>
                                                </table>
                                
                                            </div>
                                
                                           
                                
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </body>
                        </html>
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