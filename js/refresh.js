var preparePreview = function() {
    "use strict";

    if (!$("#preview").is(":visible")) {
        $("#preview").removeAttr("hidden");
    }

    var vars = {
        cancellationDate: $("#select-cancellation-date").val(),
        customerReference: $("#customer-reference").val(),
        category: $("#select-category").val(),
        contractor: $("#select-contractor").val()
    };

    preview(vars, function (res) {

        $.each($(".preview"), function(id, el) {
            $(el).removeAttr("hidden");
        });

        $("#preview-header").find("textarea").
            text(res.header).
            attr("rows", 1.5 * res.header.split("\n").length);
        $("#preview-subject").find("textarea").
            text(res.subject).
            attr("rows", 3 * res.subject.split("\n").length);
        $("#preview-body").find("textarea").
            text(res.body).
            attr("rows", 2 * res.body.split("\n").length);
    });
};