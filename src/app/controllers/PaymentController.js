
const Payment = require('../models/Payment');
const stripe = require("stripe")('sk_test_51M8HVJLsIuvyhKGNwankZ5QunSq8KrPu4YtML9W1qok0NnGWIjbKxCd038rCYLHdqDDKc5iQMLjjniMTocuRQNbD00tUDBqa8X')
const bodyParser = require("body-parser")


class PaymentController {
    // [GET] /diadiem
    show(req, res) {
        Payment.find({})
            .lean()
            .then(payments => res.json(payments))
            .catch(err => {
                message: err
            });
    }

    //[POST] /mail
    create(req, res) {
        let { amount, id, des } = req.body;
        const payments = new Payment(req.body);
        payments.save().then(data => {
            try {
                const payment = stripe.paymentIntents.create({
                    amount,
                    currency: "USD",
                    description: des,
                    payment_method: id,
                    confirm: true
                })
                console.log("Payment", payment)
                res.json({
                    message: "Payment successful",
                    success: true
                })
            } catch (error) {
                console.log("Error", error)
                res.json({
                    message: "Payment failed",
                    success: false
                })
            }
        })
            .catch(err => {
                res.json({
                    message: err
                });
            })


    }
}

module.exports = new PaymentController