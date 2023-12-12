// Selecting all HTML Elements 
const input = document.querySelector("#input-box");
const startButton = document.querySelector(".play-button");
const minuteDisplay = document.querySelector(".minuteDisplay");
const secondDisplay = document.querySelector(".secondDisplay");
const resetButton = document.querySelector(".reset-button");
const pauseButton = document.querySelector(".pause-button");

let timeInterval;
let timerPaused = false;

// When startButton is Clicked then this function will be Executed
function startTimer () {

    // Checking if there is existing interval is running or not . if so clear that interval
    if(timeInterval){
        clearInterval(timeInterval);
    }

    // Convert input into Number type & Calculate input (minutes) to second 
    let inputNumber = Number(input.value);
    let timeInSecond = inputNumber * 60;

    // setinterval will call updateTimer function every 1 sec
    timeInterval = setInterval(updateTimer , 1000);

    function updateTimer () {

        // Checking if time is not paused 
        if(!timerPaused){

            // calculate minutes and second 
            let minutes = Math.floor(timeInSecond / 60);
            let seconds = timeInSecond % 60;

            // Displaying minutes and second (if min & second is less than 10 then add 0 to beginning)
            minuteDisplay.innerHTML = minutes < 10 ? `0${minutes}` : minutes; 
            secondDisplay.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
            
            // Checking timer is reached to 0 , if so clear the interval and reset to 0
            if(timeInSecond <= 0){
                clearInterval(timeInterval);
                minuteDisplay.innerHTML = "00";
                secondDisplay.innerHTML = "00";
                return
            }

            // Decrement time by one second
            timeInSecond--;
        }
    }
}

startButton.addEventListener("click" , startTimer)

// Function when change in input in the middle
function changeInputInMiddle () {
    clearInterval(timeInterval);
    minuteDisplay.innerHTML = "00";
    secondDisplay.innerHTML = "00";
}

// Function for Reset the Timer
function resetTimer () {
    clearInterval(timeInterval);
    minuteDisplay.innerHTML = "00";
    secondDisplay.innerHTML = "00";
    input.value=""
}

// Function for Pause the Timer
function pauseTimer (){
    timerPaused = !timerPaused;
}

input.addEventListener("input" , changeInputInMiddle);

resetButton.addEventListener("click" , resetTimer);

pauseButton.addEventListener("click" , pauseTimer);