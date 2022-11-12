const express=require('express');
const router=express.Router();

const MailController=require('../app/controllers/MailController');
router.get('/',MailController.show);
router.post('/',MailController.create);


module.exports=router;