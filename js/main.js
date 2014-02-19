/*jslint browser:true, devel:true*/
var lastAccX = 0,
    lastAccY = 0,
    lastAccZ = 0,
    sensitivity = 70,
    counter = 0,


    did_shake_phone = function (toTheLeft) {
        'use strict';
        var elems = document.getElementsByClassName('btn'),
            i,
            factor;

        console.log(toTheLeft);

        /*if (toTheLeft) {
            factor = -1;
        } else {
            factor = 1;
        }*/

        if (counter === 0) {
            for (i = 0; i < elems.length; i = i + 1) {
            elems[i].style.left = factor + '10%';
            document.getElementById('btn1f').style.display = 'block';

            document.getElementsByClassName('text')[0].style.display = 'none';
            document.getElementsByClassName('text-try')[0].style.display = 'block';
            }
        }
        

        else if (counter === 1)
            for (i = 0; i < elems.length; i = i + 1) {
            elems[i].style.left = factor + '10%';

            document.getElementById('btn2f').style.display = 'block';

            document.getElementsByClassName('text')[0].style.display = 'none';
            document.getElementsByClassName('text-try')[0].style.display = 'block';
            }

        counter = counter + 1;
    };

window.addEventListener('devicemotion', function (event) {
    'use strict';
    var acc = event.accelerationIncludingGravity,
        x = acc.x,
        y = acc.y,
        z = acc.z,
        delta = Math.abs(x - lastAccX + y - lastAccY + y - lastAccZ),
        toTheLeft = false;

    if (x < 0) {
        toTheLeft = true;
    }

    if (delta > sensitivity) {
        did_shake_phone(toTheLeft);
    }

    lastAccX = x;
    lastAccY = y;
    lastAccZ = z;
});

