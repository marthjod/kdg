var getContractors = function (select) {
    "use strict";

    $.getJSON('/contractors', function (res) {

        select.parent().removeAttr("hidden");
        select.empty();

        $.each(res, function(id, el) {
            $("<option>").text(el).appendTo(select);
        });
    });
};

var getPreview = function (select) {
    "use strict";



}

var getHumanDate = function(yyyyMMDD, callback) {
    "use strict";

    $.get('/human-date', {'lastOfMonth': yyyyMMDD}, function (res) {
        callback(res);
    });

}
