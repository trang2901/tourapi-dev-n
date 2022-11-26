const express=require('express');
const router=express.Router();

const PaymentController=require('../app/controllers/PaymentController');
router.get('/',PaymentController.show);
router.post('/', PaymentController.create);


module.exports=router;