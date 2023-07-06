var express = require('express');
var router = express.Router();

const countController = require('../controllers/countController');

/* GET users listing. */
router.get('/', countController.get);
router.get('/plus', countController.plus);
router.get('/minus', countController.minus);
router.get('/reset', countController.reset);

module.exports = router;