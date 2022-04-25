const express=require('express');
const router=express.Router();

const DuKhachController=require('../app/controllers/DuKhachController');

router.get('/',DuKhachController.show);
router.get('/:id',DuKhachController.detail);
router.post('/',DuKhachController.create);
router.put('/:id',DuKhachController.update);
router.delete('/:id',DuKhachController.delete);

module.exports=router;