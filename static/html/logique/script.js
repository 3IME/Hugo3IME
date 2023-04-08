function checkBin1(x){
var y = x.split("");
var z = y.length;
var s;
var t
for(i = 0; i < z;){
  s = Number(y[i]);
  if (s != 1 && s!= 0){
     t = 0;
    break;
  }else{
      i++;
  }
}
if(t == undefined){
   t = 1;
}
return t;
}
function bin2dec(x){
  return parseInt(x,2).toString(10);
}

function dec2bin(x){
  return parseInt(x,10).toString(2);
}

function resultBin(){
  var b = document.getElementById("bin").value;
  var i = parseInt(b,2);
  var j = i.toString(10);
  var k = Number(j);
  if(isNaN(k)){
    alert("Pas un nombre binaire");
    reset();
  }
  else{
    if(checkBin1(b) == 0){
      alert("Pas un nombre binaire");
      reset();
    }else {

    document.getElementById("dec").value = bin2dec(b);
    }
  }

}
function resultDec(){
  var d = document.getElementById("dec").value;
  var i = parseInt(d,10);
  var j = i.toString(10);
  var k = Number(j);
  if(isNaN(k)){
    alert("Pas un nombre décimal")
    reset();
  }
  else{
    document.getElementById("bin").value = dec2bin(d);
  }
}

function reset(){
  document.getElementById("bin").value = "";
  document.getElementById("dec").value = "";
}