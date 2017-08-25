var express = require('express');
var router = express.Router();
var artmodel = require("../logic/article_service").article;
var utils = require("../logic/utils").utils;
var request = require("request");

router.get('/detail/:id', function (req, res, next)
{
    // res.send(artmodel.title + " --> "+artmodel.content +" , " + req.params.id);
    //request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET", function (err, resss, body)
    //{
    //    res.render("artdetail", { contents: body });
    //});
    debugger;
    req.session.sign = true;
    //req.session.save(function (err) { console.log(err); });
    var s = request.post({ url: "https://api.weixin.qq.com/cgi-bin/token", formData: { key: "value" } },function (err,r ,body)
    {

        
        res.render("artdetail", { contents: "of course" + body + "...." + req.session.sign });
        
    });
    
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
