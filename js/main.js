/*jslint browser:true, devel:true*/
var lupe = function () {
        'use strict';
        var that = {},
            move = function (x, y) {
                document.getElementById('magnifier').style.left = x + 'px';
                document.getElementById('magnifier').style.top = y + 'px';
            };

        that.move = move;
        return that;
    },

    myLupe = lupe(),

    window_was_touched = function (event) {
        'use strict';
        var firstTouch = event.touches[0],
            x = firstTouch.clientX - 100,
            y = firstTouch.clientY - 100;

        myLupe.move(x, y);
    };

window.addEventListener('touchmove', window_was_touched);
document.addEventListener('touchmove', function (event) {
    'use strict';
    event.preventDefault();
});