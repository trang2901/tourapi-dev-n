const express=require('express');
const router=express.Router();

const LoaiTourController=require('../app/controllers/LoaiTourController');

router.get('/',LoaiTourController.show);
router.get('/:id',LoaiTourController.detail);
router.post('/',LoaiTourController.create);
router.put('/:id',LoaiTourController.update);
router.delete('/:id',LoaiTourController.delete);

module.exports=router;