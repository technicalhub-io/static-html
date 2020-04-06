var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/send',function(req,res){
	console.log(req.body)
	res.redirect('/');
});

module.exports = router;
