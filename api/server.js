var express = require('express');
var app = express();
var fs = require("fs"),
    PATH = "/users.json";

function getData() {
    return fs.readFileSync(__dirname + PATH,'utf8');
}

/*
* 写入data数据到json里面
* data {object} 全量的数据
* */
function write(data) {
    return fs.writeFileSync(__dirname + PATH, data);
}
// 获取用户列表：
app.get('/list', function (req, res) {
    var data = getData();

    res.end( data );
});


//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

app.get('/add', function (req, res) {
    // 读取已存在的数据
    var data = getData();
    data = Object.assign(JSON.parse(data), JSON.parse(req.query.item));

    write(JSON.stringify(data));
    res.end(JSON.stringify({"res": 0}));
});

app.get('/delete', function (req, res) {
    var data = getData();
    console.log(".....")
    data = JSON.parse( data );
    delete data[req.query.name];

    write(JSON.stringify(data));
    res.end( JSON.stringify(data));

});

app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    var data = getData();
    console.log("id")
    data = JSON.parse( data );
    var user = data[req.params.id];
    console.log(user);
    res.end( JSON.stringify(user));
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("PV on http://%s:%s", host, port)

});