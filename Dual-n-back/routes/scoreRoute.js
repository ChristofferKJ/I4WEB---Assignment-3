var express = require('express');
var router = express.Router();


const controller = require('../controllers/scoreController')
/* GET home page. */
router.get('/', controller.getScore)
router.post('/', controller.postScore)
router.put('/', controller.updateScore)
router.delete('/', controller.deleteScore)

module.exports = router;