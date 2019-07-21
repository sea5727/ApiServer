
const express = require('express');
const router = express.Router();  

const controller = require('./controller');



router.get('/' , controller.index);
router.get('/:id' , controller.show);
router.delete('/:id', controller.destory);
router.post('/', controller.create);;

module.exports = router;