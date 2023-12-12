const input = document.querySelector("#input-box");
const startButton = document.querySelector(".play-button");
const minuteDisplay = document.querySelector(".minuteDisplay");
const secondDisplay = document.querySelector(".secondDisplay");
const resetButton = document.querySelector(".reset-button");
const pauseButton = document.querySelector(".pause-button");

let timeInterval;
let timerPaused = false;

function startTimer () {

    if(timeInterval){
        clearInterval(timeInterval);
    }

    let inputNumber = Number(input.value);
    let timeInSecond = inputNumber * 60;

    timeInterval = setInterval(updateTimer , 1000);

    function updateTimer () {

        if(!timerPaused){
            let minutes = Math.floor(timeInSecond / 60);
            let seconds = timeInSecond % 60;
    
            minuteDisplay.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
            secondDisplay.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    
            if(timeInSecond <= 0){
                clearInterval(timeInterval);
                minuteDisplay.innerHTML = "00";
                secondDisplay.innerHTML = "00";
                return
            }
            timeInSecond--;
        }
    }
}

startButton.addEventListener("click" , startTimer)


function changeInputInMiddle () {
    clearInterval(timeInterval);
    minuteDisplay.innerHTML = "00";
    secondDisplay.innerHTML = "00";
}

function resetTimer () {
    clearInterval(timeInterval);
    minuteDisplay.innerHTML = "00";
    secondDisplay.innerHTML = "00";
    input.value=""
}

function pauseTimer (){
    timerPaused = !timerPaused;
}

input.addEventListener("input" , changeInputInMiddle);

resetButton.addEventListener("click" , resetTimer);

pauseButton.addEventListener("click" , pauseTimer);