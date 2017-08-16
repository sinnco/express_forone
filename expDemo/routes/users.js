var express = require('express');
var router = express.Router();

///* GET users listing. */
router.get('/user/:id', function(req, res, next) {
    //res.send('respond with a resource'+ req.params.id);
    next();
});

router.get('/user/:id', function (req, res, next)
{
    console.log(req.params.id);
    if (req.params.id == 0) { next('route'); }
    else {        next();    }
    }, function (req, res, next)
    {
        res.send({ title: 'normal '+ req.params.id});
    });

router.get('/user/:id', function (req, res, next) {
    res.send({ title: 'error in ' + req.params.id, body: 'error in in' });
});

module.exports = router;
