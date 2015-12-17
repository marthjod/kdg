var express = require('express');
var moment = require('moment');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser')

var app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');


var categories = ['Telefon', 'Versicherung'];
var contractors = ['ACME', 'BCME'];
var customerReference = 'MM-01234-56';

var previewText = '\n \
\n \
\n \
Vertragskündigung {{ data.contractor }}\n \
\n \
\n \
Sehr geehrte Damen und Herren, \n \
\n \
hiermit kündige ich meinen zum {{ data.cancellationDate }}. \n \
\n \
Mit freundlichen Grüßen \n \
\n \
\n \
';

var getLastOfMonth = function(fmt, m) {
    "use strict";

    if (!m) {
        var today = new Date();
        var m = moment(new Date(today.getFullYear(), today.getMonth() + 1, 0));
    }

    if (fmt === 'human') {
        return m.locale('de').format('LL');
    }

    return m.format("YYYY-MM-DD");
};

app.get('/contractors', function(req, res) {
    res.json(contractors);
});

app.get('/human-date', function(req, res) {
    var m = moment(req.query.lastOfMonth, "YYYY-MM-DD");
    res.send(getLastOfMonth('human', m));
});

app.all('/', function(req, res, next) {

    res.render('index', {
        categories: categories,
        last_of_month: getLastOfMonth(),
        customer_reference: customerReference
    })
});

app.get('/preview', function(req, res) {
    var data = req.body;
    console.log(data);

    res.json({
        'textData': nunjucks.renderString(previewText, {}),
        'pdfData': {}
    });
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Listening on http://127.0.0.1:%s', port);
});
