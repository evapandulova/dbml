// $(document).bind("touchstart touchmove", function(e) {
//   //Disable scrolling by preventing default touch behaviour
//   e.preventDefault();
//   var orig = e.originalEvent;
//   var x = orig.changedTouches[0].pageX;
//   var y = orig.changedTouches[0].pageY;
//   // Move a div
//   $("#div1").css({top:y, left:x });
// });

show_frame_2 = function () {
        'use strict';
        document.getElementById("magnifier").style.visibility = "hidden";
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("gluckwunsch").style.visibility = "visible";

    };

show_frame_3 = function () {
        'use strict';
        document.getElementById("gluckwunsch").style.visibility = "hidden";
        document.getElementById("text-after").style.visibility = "visible";
        document.getElementById("btn-buchen").style.visibility = "visible";
        document.getElementById("train").style.visibility = "visible";
        document.getElementById("magnifier").style.visibility = "hidden";
        document.getElementById("btn1").style.visibility = "hidden";
    };

$.fn.draggable = function() {
  var offset = null;
  var start = function(e) {
    var orig = e.originalEvent;
    var pos = $(this).position();
    offset = {
      x: orig.changedTouches[0].pageX - pos.left,
      y: orig.changedTouches[0].pageY - pos.top
    };
  };
  var moveMe = function(e) {
    e.preventDefault();
    var orig = e.originalEvent;
    $(this).css({
      top: orig.changedTouches[0].pageY - offset.y,
      left: orig.changedTouches[0].pageX - offset.x
    });
  };
  this.bind("touchstart", start);
  this.bind("touchmove", moveMe);
};
$("#div1").draggable();

$(window).load(function(){
    function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      setTimeout("show_frame_2()", 200);  
      setTimeout("show_frame_3()", 5000); 
    }


window.setInterval(function() {
    $('#result').text(collision($('#div1'), $('#div2')));
}, 50);


$('#div1,#div2').draggable();


});

