var express = require('express');
var co = require("co");
var router = express.Router();
var ses = require("../logic/sectionno");
var utils = require("../logic/utils").utils;
var pro = require("bluebird");
pro.promisifyAll(ses);


router.get('/detail/:id', function (req, res, next)
{

    co(function *()
    {
        var ss = yield ses.getlistAsync(10).then(function (st)
        {
            return st;
        });
        res.send(ss);
    });
});


module.exports = router;