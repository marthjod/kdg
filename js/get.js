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
