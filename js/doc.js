
var renderPDF = function(data) {
    "use strict";

    var doc = {
        pageSize: 'A4',
        pageMargins: 60,
        styles: {
            subject: {
                fontSize: 12,
                bold: true
            }
        },
        content: [
            data.header,
            '\n\n',
            { text: new Date().toLocaleDateString('de-DE'), alignment: 'right'},
            { text: data['subject'], style: 'subject' },
            '\n\n',
            data.body
        ]
    };

    pdfMake.createPdf(doc).download(); //.open(); has a bug
};

