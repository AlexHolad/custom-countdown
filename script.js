const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title');
const countdownButton = document.getElementById('coundown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown / Complete UI
function updateDOM() {
    const now = new Date().getTime();
    const distanse = countdownValue - now;
    console.log(distanse)

    const days = Math.floor(distanse / day);
    const hours = Math.floor((distanse % day) / hour);
    const minutes = Math.floor((distanse % hour) / minute);
    const seconds = Math.floor((distanse % minute) / second);

    //  Populating Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`; 
    timeElements[2].textContent = `${minutes}`; 
    timeElements[3].textContent = `${seconds}`; 


    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
}

// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
//   Get number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    console.log(countdownValue);
    updateDOM();
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
