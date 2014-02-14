/*jslint browser:true, devel:true*/
var magnifierEl = document.getElementById('magnifier'),
    lastAccX = 0,
    lastAccY = 0,
    lastAccZ = 0,

    lupe = function () {
        'use strict';
        var that = {},
            move = function (x, y) {
                magnifierEl.style.left = x + 'px';
                magnifierEl.style.top = y + 'px';
            };

        that.move = move;
        return that;
    },

    myLupe = lupe(),

    did_drag_lupe = function (event) {
        'use strict';
        var firstTouch = event.touches[0],
            x = firstTouch.clientX - 100,
            y = firstTouch.clientY - 100;

        myLupe.move(x, y);
    };


magnifierEl.addEventListener('touchmove', did_drag_lupe);
document.addEventListener('touchmove', function (event) {
    'use strict';
    event.preventDefault();
});