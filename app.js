var firstTimer = document.querySelector('#firstTimer');
var secondTimer = document.querySelector('#secondTimer');
var thirdTimer = document.querySelector('#thirdTimer');
var seconds = 0;
var minutes = 0;
var hours = 0;

var timer;

function startTime() {
    timer = setInterval(function () {
        seconds++;
        
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        
        firstTimer.innerHTML = hours + ": ";
        secondTimer.innerHTML = minutes + ": ";
        thirdTimer.innerHTML = seconds;
    }, 1000); 
}


function resetTime() {
   clearInterval(timer);
   seconds = 0;
   minutes = 0;
   hours = 0;
   
   firstTimer.innerHTML = "0: ";
   secondTimer.innerHTML = "0: ";
   thirdTimer.innerHTML = "0";
}

function stopTime() {
    clearInterval(timer);
}