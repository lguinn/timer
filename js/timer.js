// timer.js
// Lisa Guinn 2021
//
// javascript for initializing web pages and responding to user actions

function initTimer() {
    // initialize the timer page when loading
    var addr = new URL(window.location.href);
    var description = addr.searchParams.get('descr');
    var courseName = addr.searchParams.get('name');
    var minutes = Number(addr.searchParams.get('minutes'));

    document.getElementById('descr').innerHTML = description;
    document.getElementById('name').innerHTML = courseName;
    document.getElementById('timer').innerHTML = formattedTime(minutes * 60);
    document.getElementById('timer-value').innerHTML = minutes;
    console.log('Minutes ', minutes)
}

function startTimer() {
    // You can only start the timer - once it is running, the start button becomes invisible
    //    because I haven't figured out how to clear the clockUpdater (I just keep duplicating them!)
    document.getElementById('control-button').style.display = 'none';
    var timerDisplay = document.getElementById('timer');
    var counter = Number(document.getElementById('timer-value').innerText) * 60; //seconds to count
    
    const clockUpdater = setInterval (function() {
        if (counter < 0) {
            clearInterval(counter=0);
            return;
        }
        timerDisplay.innerHTML = formattedTime(counter);
        counter -= 1;
        if (counter <= 0) {
            timerDisplay.style.backgroundColor = "red";
        }
    }, 1000);
}

function formattedTime(t) {
    var secs = Number(t) % 60;
    var mins = (t - secs) / 60;
    if (secs < 10) {
        punc = ':0';
    } else {
        punc = ':';
    }
    return mins + punc + secs;
}


