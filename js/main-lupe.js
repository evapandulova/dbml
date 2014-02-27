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

  
    show_last_frame = function () {
        'use strict';
        document.getElementById("magnifier").style.visibility = "hidden";
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("text-after").style.visibility = "visible";
        document.getElementById("btn-buchen").style.visibility = "visible";
        document.getElementById("train").style.visibility = "visible";
    }
    setTimeout("show_last_frame()", 10000);  



magnifierEl.addEventListener('touchmove', did_drag_lupe);
document.addEventListener('touchmove', function (event) {
    'use strict';
    event.preventDefault();
});

