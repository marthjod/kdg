
var renderPDF = function(data) {
    "use strict";

    var category = data["category"],
        contractor = data["contractor"],
        cancellationDate = data["cancellation date"];

    var doc = {
        styles: {
            header: {
                fontSize: 22,
                bold: true
            }
        },
        content: [
            'An ' + contractor,
            '\n\n',
            {
                text: 'Vertragskündigung ' + category, style: 'header'
            },
            '\n\n',
            'Sehr geehrte Damen und Herren,',
            '\n\n',
            {
                text: [
                    'Lorem ipsum zum ',
                    {
                        text: cancellationDate, bold: true
                    }
                ]
            }

        ]
    };

    pdfMake.createPdf(doc).open();
};

