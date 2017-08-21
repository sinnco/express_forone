var mysql = require("../db/mysqlorm");
var co = require("co");
var pro = require("bluebird");
pro.promisifyAll(mysql);

var art = {
    title: "titles",
    content: "contents name",
    getlist: function (top, callback)
    {
        var res = mysql.listAsync({
            where: {
                name: { $like: "sin%" }
            }
        }).then(function (result)
        {
            callback(null, result);
        });
    },
    getsqllist: function (top, callback)
    {
        mysql.queryAsync("select * from ex_source").then(function (result)
        {
            console.log(result);
            callback(null, result);
        });
    }
}
exports.article = art;