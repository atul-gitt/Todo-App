const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/create',homeController.create);
router.post('/delete',homeController.delete)
module.exports = router;