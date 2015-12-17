var preview = function (data, callback) {
    "use strict";

    $.post('/preview', data, function (res) {
        callback(res);
    });
};

var render = function(data, callback) {
    "use strict";

    $.post('/render', data, function (res) {
        callback(res);
    });
};