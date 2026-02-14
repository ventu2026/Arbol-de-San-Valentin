var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = new Date();

    var seconds = Math.floor((current - date) / 1000);

    var days = Math.floor(seconds / (3600 * 24));
    seconds %= (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var result =
        "<span class=\"digit\">" + days + "</span> días " +
        "<span class=\"digit\">" + hours + "</span> horas " +
        "<span class=\"digit\">" + minutes + "</span> minutos " +
        "<span class=\"digit\">" + seconds + "</span> segundos";

    $("#clock").html(result);
}

// October = 9 (months are 0-based in JavaScript)
var startDate = new Date(2025, 9, 20, 21, 52, 0);

timeElapse(startDate);
setInterval(function () {
    timeElapse(startDate);
}, 1000);
