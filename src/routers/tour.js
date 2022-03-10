const express=require('express');
const router=express.Router();

const TourController=require('../app/controllers/TourController');

router.get('/',TourController.show);
router.get('/:slug',TourController.detail);
router.post('/',TourController.create);
router.put('/:id',TourController.update);
router.delete('/:id',TourController.delete);

module.exports=router;
