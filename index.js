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


var categories = ['Telefon', 'Versicherung'],
    contractors = [
        'ACME Corp.\nWarschauer Str. 177\n11111 Berlin',
        'Foobar Inc.\nHermannplatz 1A\n12222 Berlin'
    ],
    customerReference = 'MM-01234-56',
    customerName = 'Darth Vader';

var previewText = {
    header: [
        "An ",
        "{{ contractor }}"
    ],
    subject: [
        "Vertragskündigung {{ category }} (Ref.: {{ customerReference }})"
    ],
    body: [
        "Sehr geehrte Damen und Herren,",
        "",
        "hiermit kündige ich meinen Vertrag zum {{ cancellationDate }}.",
        "",
        "Mit freundlichen Grüßen",
        "{{ customerName }}"
    ]
};

var getLocaleDate = function (m) {
    if (typeof m === 'string') {
        m = moment(m);
    }
    return m.locale('de').format('LL');
};

var getLastOfMonth = function(fmt, m) {
    "use strict";

    if (!m) {
        var today = new Date();
        var m = moment(new Date(today.getFullYear(), today.getMonth() + 1, 0));
    }

    if (fmt === 'human') {
        return getLocaleDate(m);
    }

    return m.format("YYYY-MM-DD");
};

var rendered = function(templateStr, vars) {
    "use strict";

    return nunjucks.renderString(templateStr, vars);
};

var buildResponse = function(req) {
    "use strict";

    var vars = req.body;

};



app.get('/contractors', function(req, res) {
    res.json(contractors);
});

app.all('/', function(req, res, next) {

    preview = req.method === 'POST' ? true : false;

    res.render('index', {
        preview: preview,
        categories: categories,
        lastOfMonth: getLastOfMonth(),
        customerReference: customerReference,
        customerName: customerName
    })
});

app.post('/preview', function(req, res) {

    var vars = req.body;
    vars.cancellationDate = getLocaleDate(vars.cancellationDate);
    vars['customerName'] = customerName;

    var header = rendered(previewText.header.join("\n"), vars),
        subject = rendered(previewText.subject.join("\n"), vars),
        body = rendered(previewText.body.join("\n"), vars);

    res.json({
        header: header,
        subject: subject,
        body: body
    });
});

app.post('/render', function(req, res) {

    var vars = req.body;
    vars.cancellationDate = getLocaleDate(vars.cancellationDate);
    vars['customerName'] = customerName;

    res.json({
        'pdfData': {
            header: vars.header,
            subject: vars.subject,
            body: vars.body
        }
    });
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Listening on http://127.0.0.1:%s', port);
});
