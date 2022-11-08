const express=require('express');
const router=express.Router();

const TourController=require('../app/controllers/TourController');
const Tour = require('../app/models/Tour');

router.get('/',TourController.show);
router.get('/page/:page',TourController.showPage);
router.get('/allTags',TourController.showAllTags);
router.get('/:slug',TourController.detail);

router.post('/',TourController.create);
router.put('/:id',TourController.update);
router.patch('/:id',TourController.updatePatch);
router.delete('/:id',TourController.delete);

module.exports=router;
