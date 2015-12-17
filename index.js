var express = require('express');
var moment = require('moment');
var bodyParser = require('body-parser')

var app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');


var categories = ['Phone', 'Insurance'];
var contractors = ['ACME', 'BCME'];

var get_last_of_month = function() {
    "use strict";

    var today = new Date();
    return moment(new Date(today.getFullYear(), today.getMonth() + 1, 0)).
        format("YYYY-MM-DD");
};




app.get('/contractors', function(req, res) {
    res.json(contractors);
});

app.all('/', function(req, res, next) {
    var preview = false,
        render = false;

    if (req.query) {
        if (req.query['render']) {
            render = req.query.render == 1 ? true : false;
        }
        if (req.query['preview']) {
            preview = req.query.preview == 1 ? true : false;
        }
    }

    res.render('index', {
            preview: preview,
            render: render,
            categories: categories,
            last_of_month: get_last_of_month()
        })
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Listening on http://127.0.0.1:%s', port);
});
