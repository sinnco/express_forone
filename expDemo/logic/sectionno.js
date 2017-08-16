var mssql = require("../db/mssqldb");
var co = require("co");
var pro = require("bluebird");
pro.promisifyAll(mssql);


var seservice =
    {
        getlist: function(top, func)
        {
            //return [1,2,3,4];
            debugger;
            //co(function *()
            //{
                var s = mssql.queryAsync("  select * from SECTIONNO where CITY = '天津'").then(function (result)
                {
                    console.log("---------------------------------------");
                    //console.log(err);
                    func(null, result, 0);
                });
                
            //});
        },
        getsome: function(s, func)
        {
            console.log(s);
            func(null, s);
        }
    };
module.exports = seservice;