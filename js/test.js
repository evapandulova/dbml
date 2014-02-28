        // window.addEventListener('load', function(){
         
        //  var box1 = document.getElementById('box1')
        //  var statusdiv = document.getElementById('statusdiv')
        //  var startx = 0
        //  var dist = 0
         
         
        //  box1.addEventListener('touchstart', function(e){
        //   var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        //   startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
        //   statusdiv.innerHTML = 'Status: touchstart<br /> ClientX: ' + startx + 'px'
        //   e.preventDefault()
        //  }, false)
         
        //  box1.addEventListener('touchmove', function(e){
        //   var touchobj = e.changedTouches[0] // reference first touch point for this event
        //   var dist = parseInt(touchobj.clientX) - startx
        //   statusdiv.innerHTML = 'Status: touchmove<br /> Horizontal distance traveled: ' + dist + 'px'
        //   e.preventDefault()
        //  }, false)
         
        //  box1.addEventListener('touchend', function(e){
        //   var touchobj = e.changedTouches[0] // reference first touch point for this event
        //   statusdiv.innerHTML = 'Status: touchend<br /> Resting x coordinate: ' + touchobj.clientX + 'px'
        //   e.preventDefault()
        //  }, false)
         
        // }, false)

        // function myFunction()
        // {
        // var x="";
        // var time=new Date().getHours();
        // if (time<20)
        //   {
        //   x="Good day";
        //   }
        // else
        //   {
        //   x="Good evening";
        //   }
        // document.getElementById("demo").innerHTML=x;
        // };


// var overlaps = (function () {
//     function getPositions( elem ) {
//         var pos, width, height;
//         pos = $( elem ).position();
//         width = $( elem ).width();
//         height = $( elem ).height();
//         return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
//     }

//     function comparePositions( p1, p2 ) {
//         var r1, r2;
//         r1 = p1[0] < p2[0] ? p1 : p2;
//         r2 = p1[0] < p2[0] ? p2 : p1;
//         return r1[1] > r2[0] || r1[0] === r2[0];
//     }

//     return function ( a, b ) {
//         var pos1 = getPositions( a ),
//             pos2 = getPositions( b );
//         return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
//     };
// })();

// $(function () {
// 	$( '#hel' ).html( 'hello kitty' );
//     var area = $( '#glass' )[0],
//         box = $( '.lol' )[0],
//         html;
    
//     msg = $( area ).children().not( box ).map( function ( i ) {
//         return '<p>ACHTUNG! overlapping ' + ( i + 1 ) + ' = ' + overlaps( box, this ) + '</p>';
//     }).get().join( '' );

//     $( '#hel' ).append( msg );
// });


        var overlaps = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width();
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();

$(function () {
    var area = $( '#area' )[0],
        box = $( '#box0' )[0],
        html;
    
    html = $( area ).children().not( box ).map( function ( i ) {
        return '<p>Red box + Box ' + ( i + 1 ) + ' = ' + overlaps( box, this ) + '</p>';
    }).get().join( '' );

    $( 'body' ).append( html );
});

