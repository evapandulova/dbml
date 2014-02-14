/*jslint browser:true, devel:true*/
var lastAccX = 0,
    lastAccY = 0,
    lastAccZ = 0,
    sensitivity = 20,

    did_shake_phone = function () {
        'use strict';
        var elems = document.getElementsByClassName('btn');
        for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
        document.getElementsByClassName('txt')[0].style.display = "none";
        document.getElementById('btn5').style.display = "block";
        document.getElementById('btn6').style.display = "block";
        document.getElementById('btn17').style.display = "block";
        }

    };
    window.addEventListener('devicemotion', function (event) {
    'use strict';
    var acc = event.accelerationIncludingGravity,
        x = acc.x,
        y = acc.y,
        z = acc.z,
        delta = Math.abs(x - lastAccX + y - lastAccY + y - lastAccZ);

    console.log(delta);

    if (delta > sensitivity) {

        did_shake_phone();
    }
    lastAccX = x;
    lastAccY = y;
    lastAccZ = z;
});

