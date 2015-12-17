var getContractors = function (select) {
    "use strict";

    $.getJSON('/contractors', function (res) {

        select.parent().removeAttr("hidden");
        select.empty();

        $("<option>").text("Auswählen...").
            attr("class", "dummy").appendTo(select);
        $.each(res, function(id, el) {
            $("<option>").text(el).appendTo(select);
        });
    });
};


