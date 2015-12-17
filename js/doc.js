
var renderPDF = function(data) {
    "use strict";

//     var category = data["category"],
//         contractor = data["contractor"],
//         cancellationDate = data["cancellationDate"];

// // var contractor = "Telefónica Germany GmbH & Co. OHG";
// var contractorAddress = "Am Bürohochaus 1\n14425 Potsdam";
// var contractorReference = "0163 1234567";
// var contractName = "Handyvertrag";
// // var category = "Kategorie";
// var customer = "Peter Pan";

// var cancellationDate = "1/1/2021";

    // console.log(data['subject']);

    var doc = {
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

