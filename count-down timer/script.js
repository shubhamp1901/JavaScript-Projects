const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minutesel = document.getElementById("minutes");
const secondsel = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600/ 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysel.innerHTML = formatTime(days);
    hoursel.innerHTML = formatTime(hours);
    minutesel.innerHTML = formatTime(minutes);
    secondsel.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown,1000);