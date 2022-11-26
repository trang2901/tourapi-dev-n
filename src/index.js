const express=require('express');
const route=require('./routers');
const app=express();
var cors = require('cors');
const path=require('path');

// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
//----------------------------------------------stripe

// app.post("/payment", cors(), async (req, res) => {
// 	let { amount, id } = req.body
	
//     try {
// 		const payment = await stripe.paymentIntents.create({
// 			amount,
// 			currency: "USD",
// 			description: "Spatula company",
// 			payment_method: id,
// 			confirm: true
// 		})
// 		console.log("Payment", payment)

// 		res.json({
// 			message: "Payment successful",
// 			success: true
// 		})
// 	} catch (error) {
// 		console.log("Error", error)
// 		res.json({
// 			message: "Payment failed",
// 			success: false
// 		})
// 	}
// })

//-------------------------------------------------------------------------------
app.use(cors());
const port= 3001;

//Connect to database
const db=require('./app/config/db');
const { Server } = require('http');
db.connect();


//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware


//Init Router
route(app);
app.listen(port);

