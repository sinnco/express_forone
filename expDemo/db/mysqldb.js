// 连接MySQL
var mysql = require('mysql');
var mysqlpool = mysql.createPool({
    host: '47.91.234.234',
    user: 'root',
    password: 'Rootdev!123qwe',
    database: 'express_forone'
});

var mysqldb =
    {
        query: function(sql,callback)
        {
            mysqlpool.getConnection(function (err, connection)
            {
                // Use the connection
                connection.query(sql, function (err, rows)
                {
                    callback(err, rows);
                    connection.release();//释放链接
                });
            });
        }
    }
module.exports = mysqldb;