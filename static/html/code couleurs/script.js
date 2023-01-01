var output = document.getElementsByTagName("output")[0]; 
var canvas = document.getElementsByTagName("canvas")[0]; 
var ctx    = canvas.getContext("2d"); 
var cw     = canvas.width;           
var ch     = canvas.height;          
var lw     = cw / 9;                  




function c(t) {
    for(var i = 0, len = t.length; i < len; ++i) if ( t[i].checked )
        return t[i].value;
    return false;
}


function fn() {
    var a = [];
    var ohm = 0;

    
    
    for (var i = 1; i < 5; ++i) a.push( c( form1["p" + i] ) );
  

    
    
    ohm = ( Number( a[0] ) + Number( a[1]) ) * Math.pow( 10, Number(a[2]) );
    
    if( (ohm >= 1000) && (ohm < 1000000) ) {
        ohm = ohm / 1000 + "K";
    } else if( (ohm >= 1000000) && (ohm < 1000000000) ) {
        ohm = ohm / 1000000 + "M";    
    } else if( (ohm >= 1000000000) && (ohm < 1000000000000) ) {
        ohm = ohm / 1000000000 + "G";    
    }

   
	ohm = String(ohm).replace(/(\.[1-9]{1,2})0+\d/gm, "$1");
    
   
    output.innerHTML = ohm + "Ω (±" + a[3] + "&#37)" ;



    var ca = [];
    var colors = [
        "black", "brown", "red", "orange", "yellow",
        "green", "blue", "purple", "gray", "white",
        "silver", "gold", "transpalent"
    ];

    
     
    ca[0] = colors[ (a[0] / 10) ];
    ca[1] = colors [ a[1] ];
    ca[2] = (Number(a[2]) < 0 ) ?
        colors[ Number(a[2]) + 12 ]:
        colors [ a[2] ];

    switch(a[3]) {
        case "0.05":
            ca[3] = "orange";
            break;
        case "0.5":
            ca[3] = "green";
            break;
        case "0.25":
            ca[3] = "blue";
            break;
        case "0.1":
            ca[3] = "purple";
            break;
        case "10":
            ca[3] = "silver";
            break;
        case "5" :
            ca[3] = "gold";
            break;
        case "20":
            ca[3] = "transparent";
            break;
        default:
            ca[3] = colors[ a[3] ];
            break;
    }
  


  
    ctx.clearRect(0, 0, cw, ch);

    
    
    for(var i = 0; i < 4; ++i) {
        ctx.fillStyle = ca[i];
        ctx.fillRect(i*lw*2+lw,  0,  lw,  ch);
    }
    
   
    var grd  = ctx.createLinearGradient(0, 0, 0, ch);
    grd.addColorStop( 0,    'rgba(255, 255, 255, 0     )' );
    grd.addColorStop( 0.25, 'rgba(255, 255, 255, 0.3   )' );
    grd.addColorStop( 0.5,  'rgba(255, 255, 255, 0     )' );
    grd.addColorStop( 0.75, 'rgba(  0,   0,   0, 0.125 )' );
    grd.addColorStop( 1,    'rgba(  0,   0,   0, 0.25  )' );
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, cw, ch);
    
} // End Of fn




window.onload = fn; 
form1.onchange = fn; 





