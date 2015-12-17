var getContractors = function (select) {
    "use strict";

    $.getJSON('/contractors', function (res) {

        select.parent().removeAttr("hidden");
        select.empty();

        $("<option>").text("Auswählen...").appendTo(select);
        $.each(res, function(id, el) {
            $("<option>").text(el).appendTo(select);
        });
    });
};


