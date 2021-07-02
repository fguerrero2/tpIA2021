var express = require('express');
var router = express.Router();
var UploadController = require('../controllers/uploadimage.controller');



/* GET utils listing. */
router.get('/', function(req, res, next) {
  res.send('Utils listing');
});

router.post('/utils/uploadImage', UploadController.uploadFiles);


module.exports = router;
