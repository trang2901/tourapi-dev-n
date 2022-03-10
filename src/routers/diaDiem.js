const express=require('express');
const router=express.Router();

const DiaDiemController=require('../app/controllers/DiaDiemController');

router.get('/',DiaDiemController.show);
router.get('/:slug',DiaDiemController.detail);
router.post('/',DiaDiemController.create);
router.put('/:id',DiaDiemController.update);
router.delete('/:id',DiaDiemController.delete);

module.exports=router;