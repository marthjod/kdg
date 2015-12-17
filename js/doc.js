
var renderPDF = function(header, subject, body) {
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


   var doc = {
        styles: {
            subject: {
                fontSize: 14,
                bold: true
            }
        },
        content: [
            { text: header },
            { text: subject, style: subject },
            { text: body }
        ]
    };

    pdfMake.createPdf(doc).open();
};

