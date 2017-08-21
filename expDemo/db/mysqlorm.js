var Sequelize = require('sequelize');
var sqdb = new Sequelize('express_forone', 'rootdev', 'Rootdev!123qwe', { host: '47.91.234.234', port: '3306', dialect: 'mysql' });

var exSource = sqdb.define("ex_source",
{
    id: { type: Sequelize.INTEGER, field: "id", primaryKey: true },
    name: { type: Sequelize.STRING, field: "name" },
    createtime: { type: Sequelize.DATE, field: "createtime" },
    isvalid: { type: Sequelize.INTEGER, field: "isvalid" }
}, {
    freezeTableName: true
});

var mysqlorm =
    {
        list: function(findobj, callback)
        {
            exSource.findAll(findobj).then(function (result)
            {
                console.log(result.length);
                callback(null, result[0].name);
            });
        },
        query: function(sql, callback)
        {
            sqdb.query(sql, { type: Sequelize.QueryTypes.SELECT }).then(results =>
            {
                callback(null, results);
            });
        }
    }
module.exports = mysqlorm;