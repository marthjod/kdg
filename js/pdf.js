var contractor = "Telefónica Germany GmbH & Co. OHG";
var contractorAddress = "Am Bürohochaus 1\n14425 Potsdam";
var contractorReference = "0163 1234567";
var contractName = "Handyvertrag";
var category = "Kategorie";
var customer = "Peter Pan";

var cancellationDate = "1/1/2021";


   var dd = {
        styles: {
            header: {
                fontSize: 22,
                bold: true
            }
        },
        content: [
            'An \n' + contractor + '\n\n' +contractorAddress,
            '\n\n',
            {
                text: 'Vertragskündigung ' + contractorReference, style: 'header'
            },
            '\n\n',
            'Sehr geehrte Damen und Herren,',
            '\n\n',
            {
                text: [
                    'Hiermit kündige ich meinen '+ contractName + ' zum \n\n',
                    {
                        text: cancellationDate, bold: true
                    }
                ]
            },
            '\nBitte bestätigen Sie die Kündigung schriftlich',

            '\nMit freundlichen ' + customer,

        ]
    };
