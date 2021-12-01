function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function visible(count, duration){

setInterval(function(){
    var target = document.getElementById("tato");
    var x = hidden ? "visible" : "hidden";
    hidden = !hidden;
    if (!hidden){
        if (count >= 0 && count < 10){
        var x_pos = getRandomArbitrary(20, 80);
        var y_pos = getRandomArbitrary(1, 30);
        
        target.style.left = x_pos + "%";
        target.style.top = y_pos + "%";
        count = count + 1;
        }
        else{
        target.style.left = "75%";
        target.style.top = "1%";
        count = 0;
        }
    }
  
},duration);
    console.log("pewpewpewp");
  console.log("duration");
}

/**
function visible(count, duration){

setInterval(function(){
    var target = document.getElementById("tato");
    duration = parseInt((getRandomArbitrary(3, 21))* 1000);
    target.style.visibility= hidden ? "visible" : "hidden";
    hidden = !hidden;
    if (!hidden){
        if (count >= 0 && count < 10){
        var x_pos = getRandomArbitrary(0, 75);
        var y_pos = getRandomArbitrary(0, 90);
        
        target.style.left = x_pos + "%";
        target.style.top = y_pos + "%";
        count = count + 1;
        }
        else{
        target.style.left = "75%";
        target.style.top = "1%";
        count = 0;
        }
    }
  
},duration);
    console.log("pewpewpewp");
  console.log("duration");
}
*/

