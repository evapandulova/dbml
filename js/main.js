/*jslint browser:true, devel:true*/
var lastAccX = 0,
    lastAccY = 0,
    lastAccZ = 0,
    sensitivity = 30,
    counter = 0,

    show_last_frame = function () {
        'use strict';
        document.getElementById('btn30-p').style.display = 'block';
        
        document.getElementsByClassName('train')[0].style.display = 'block';
        document.getElementsByClassName('text-after')[0].style.display = 'block';

        document.getElementById('btn1-p').style.display = 'none';
        document.getElementById('btn1').style.display = 'none';
        document.getElementById('btn2-p').style.display = 'none';
        document.getElementById('btn2').style.display = 'none';
        document.getElementById('btn3-p').style.display = 'none';
        document.getElementById('btn3').style.display = 'none';
        document.getElementById('btn4-p').style.display = 'none';
        document.getElementById('btn4').style.display = 'none';
        document.getElementById('btn5-p').style.display = 'none';
        document.getElementById('btn5').style.display = 'none';
        document.getElementById('btn6-p').style.display = 'none';
        document.getElementById('btn6').style.display = 'none';
        document.getElementById('btn7-p').style.display = 'none';  //29
        document.getElementById('btn7').style.display = 'none';
        document.getElementById('btn8-p').style.display = 'none';
        document.getElementById('btn8').style.display = 'none';
        document.getElementById('btn9-p').style.display = 'none';
        document.getElementById('btn9').style.display = 'none';
        document.getElementById('btn10-p').style.display = 'none';
        document.getElementById('btn10').style.display = 'none';
        document.getElementById('btn11-p').style.display = 'none'; //29
        document.getElementById('btn11').style.display = 'none';
        document.getElementById('btn12-p').style.display = 'none';
        document.getElementById('btn12').style.display = 'none';
        document.getElementById('btn13-p').style.display = 'none';
        document.getElementById('btn13').style.display = 'none';
        document.getElementById('btn14-p').style.display = 'none';
        document.getElementById('btn14').style.display = 'none';
        document.getElementById('btn15-p').style.display = 'none';
        document.getElementById('btn15').style.display = 'none';
        document.getElementById('btn16-p').style.display = 'none';
        document.getElementById('btn16').style.display = 'none';
        document.getElementById('btn17-p').style.display = 'none';
        document.getElementById('btn17').style.display = 'none';
        document.getElementById('btn18-p').style.display = 'none'; //29
        document.getElementById('btn18').style.display = 'none';
        document.getElementById('btn19-p').style.display = 'none';
        document.getElementById('btn19').style.display = 'none';
        document.getElementById('btn20-p').style.display = 'none';
        document.getElementById('btn20').style.display = 'none';
        document.getElementById('btn21-p').style.display = 'none';
        document.getElementById('btn21').style.display = 'none';
        document.getElementById('btn22-p').style.display = 'none';
        document.getElementById('btn22').style.display = 'none';
        document.getElementById('btn23-p').style.display = 'none';
        document.getElementById('btn23').style.display = 'none';
        document.getElementById('btn24-p').style.display = 'none';
        document.getElementById('btn24').style.display = 'none';
        document.getElementById('btn25-p').style.display = 'none';
        document.getElementById('btn25').style.display = 'none';
        document.getElementById('btn26-p').style.display = 'none';
        document.getElementById('btn26').style.display = 'none';
        document.getElementById('btn27-p').style.display = 'none';
        document.getElementById('btn27').style.display = 'none';
        document.getElementById('btn28-p').style.display = 'none';
        document.getElementById('btn28').style.display = 'none';
        document.getElementById('btn29-p').style.display = 'none';
        document.getElementById('btn29').style.display = 'none';
        document.getElementsByClassName('text-2')[0].style.display = 'none';

    },

    did_shake_phone = function (toTheLeft) {
        'use strict';
        var elems = document.getElementsByClassName('btn'),
            i;
        if (counter === 0) {
            for (i = 0; i < elems.length; i = i + 1) {
                document.getElementById('btn1-p').style.display = 'block';
                document.getElementById('btn1').style.display = 'none';
                document.getElementById('btn2-p').style.display = 'block';
                document.getElementById('btn2').style.display = 'none';
                document.getElementById('btn3-p').style.display = 'block';
                document.getElementById('btn3').style.display = 'none';
                document.getElementById('btn4-p').style.display = 'block';
                document.getElementById('btn4').style.display = 'none';
                document.getElementById('btn5-p').style.display = 'block';
                document.getElementById('btn5').style.display = 'none';
                document.getElementById('btn6-p').style.display = 'block';
                document.getElementById('btn6').style.display = 'none';
                document.getElementById('btn7-p').style.display = 'block';  //29
                document.getElementById('btn7').style.display = 'none';
                document.getElementById('btn8-p').style.display = 'block';
                document.getElementById('btn8').style.display = 'none';
                document.getElementById('btn9-p').style.display = 'block';
                document.getElementById('btn9').style.display = 'none';
                document.getElementById('btn10-p').style.display = 'block';
                document.getElementById('btn10').style.display = 'none';
                document.getElementById('btn11-p').style.display = 'block'; //29
                document.getElementById('btn11').style.display = 'none';
                document.getElementById('btn12-p').style.display = 'block';
                document.getElementById('btn12').style.display = 'none';
                document.getElementById('btn13-p').style.display = 'block';
                document.getElementById('btn13').style.display = 'none';
                document.getElementById('btn14-p').style.display = 'block';
                document.getElementById('btn14').style.display = 'none';
                document.getElementById('btn15-p').style.display = 'block';
                document.getElementById('btn15').style.display = 'none';
                document.getElementById('btn16-p').style.display = 'block';
                document.getElementById('btn16').style.display = 'none';
                document.getElementById('btn17-p').style.display = 'block';
                document.getElementById('btn17').style.display = 'none';
                document.getElementById('btn18-p').style.display = 'block'; //29
                document.getElementById('btn18').style.display = 'none';
                document.getElementById('btn19-p').style.display = 'block';
                document.getElementById('btn19').style.display = 'none';
                document.getElementById('btn20-p').style.display = 'block';
                document.getElementById('btn20').style.display = 'none';
                document.getElementById('btn21-p').style.display = 'block';
                document.getElementById('btn21').style.display = 'none';
                document.getElementById('btn22-p').style.display = 'block';
                document.getElementById('btn22').style.display = 'none';
                document.getElementById('btn23-p').style.display = 'block';
                document.getElementById('btn23').style.display = 'none';
                document.getElementById('btn24-p').style.display = 'block';
                document.getElementById('btn24').style.display = 'none';
                document.getElementById('btn25-p').style.display = 'block';
                document.getElementById('btn25').style.display = 'none';
                document.getElementById('btn26-p').style.display = 'block';
                document.getElementById('btn26').style.display = 'none';
                document.getElementById('btn27-p').style.display = 'block';
                document.getElementById('btn27').style.display = 'none';
                document.getElementById('btn28-p').style.display = 'block';
                document.getElementById('btn28').style.display = 'none';
                document.getElementById('btn29-p').style.display = 'block';
                document.getElementById('btn29').style.display = 'none';
                document.getElementsByClassName('text')[0].style.display = 'none';
                document.getElementsByClassName('text-2')[0].style.display = 'block';
                setTimeout("show_last_frame()", 3000);
            }
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


