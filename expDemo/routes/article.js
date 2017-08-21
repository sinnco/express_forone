var express = require('express');
var router = express.Router();
var artmodel = require("../logic/article_service").article;
var utils = require("../logic/utils").utils;

router.get('/detail/:id', function (req, res, next)
{
    // res.send(artmodel.title + " --> "+artmodel.content +" , " + req.params.id);
    res.render("artdetail", { contents: "of course" });
});

router.get('/show/:id', function (req, res, next)
{
    //res.send(artmodel.title + " --> " + artmodel.content + " ,show method: " + req.params.id);
    //var st = artmodel.getlist(10, function (err, result)
    //{
        
    //    res.render("art", { title: artmodel.title, summary: result });
    //});
    
    var st2 = artmodel.getsqllist(10, function (err, result)
    {
        res.render("art", { title: artmodel.title, summary: result });
    });
});

module.exports = router;
