var express = require('express');
var router = express.Router();
var indexmodel=require("../models/indexmodel")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('userHome.ejs');
});
router.get('/signup', function (req, res, next) {
    res.render('form.ejs', { msg: "resigter here" });
});
router.post('/signup', function (req, res, next) {
    
    indexmodel.register(req.body).then((result)=>
    {
        if (result=="true")
        {
            res.render('form.ejs', { msg: "success" });
            
        }
        else {
            res.render('form.ejs', { msg: "sorry" });
        }
    }).catch((err)=> {
      
        console.log(err);
    })
   
});
router.get('/update', function(req, res, next) {
    res.render('update.ejs', { msg: "enter pasword for update data " });
});

router.post('/update', function (req, res, next) {
    indexmodel.update(req.body).then((resu) => {
        if (resu)
        {
            res.render('update.ejs', { msg: "updated" });
            
        }
        else {
            res.render('update.ejs', { msg: "sorry your password is not found " });
        }
        
    }).catch((err) => {
        console.log(err);
    });
  
});

module.exports = router;