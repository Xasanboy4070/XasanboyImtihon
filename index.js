const btnPomodoro = document.querySelector(".btn_pomodoro");
const btnShort = document.querySelector(".btn_short");
const btnLong = document.querySelector(".btn_long");

const btnStart = document.querySelector(".btn_start");
const btnPause = document.querySelector(".btn_pause");
const btnStop = document.querySelector(".btn_stop");

const timeHour = document.querySelector(".time_hour");
const timeMinutes = document.querySelector(".time_minutes");

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

let deg1 = 315;
let deg2 = 315;
let deg3 = 315;
let deg4 = 315;

let deg1Interval;
let deg2Interval;
let deg3Interval;
let deg4Interval;

let Times1 = 0;
let Times2 = 0;

function nimadur(time) {
  if (time == 25) {
    Times1 = 375000;
    Times2 = 4166.5;
  } else if (time == 5) {
    Times1 = 75000;
    Times2 = 833.5;
  } else if (time == 15) {
    Times1 = 225000;
    Times2 = 2500;
  }
  deg1Interval = setInterval(times1, Times2);
}

function times1() {
  ++deg2;
  if (deg2 == 405) {
    deg3Interval = setInterval(times2, Times2);
    clearInterval(deg1Interval);
  }
  box2.style.setProperty("--rotate", `rotate(${deg2}deg)`);
}

function times3() {
  ++deg3;
  if (deg3 == 405) {
    deg4Interval = setInterval(times4, Times2);
    clearInterval(deg2Interval);
  }
  box3.style.setProperty("--rotate", `rotate(${deg3}deg)`);
}
function times2() {
  ++deg4;
  if (deg4 == 405) {
    deg2Interval = setInterval(times3, Times2);
    clearInterval(deg3Interval);
  }
  box4.style.setProperty("--rotate", `rotate(${deg4}deg)`);
}
function times4() {
  ++deg1;
  if (deg1 == 405) {
    clearInterval(deg4Interval);
  }
  box1.style.setProperty("--rotate", `rotate(${deg1}deg)`);
}

let T = 60;
let mitunsInterval;
let timeInterval;
let H = Number(timeHour.textContent);

btnPomodoro.addEventListener("click", () => {
  btnPomodoro.classList.add("active");
  btnShort.classList.remove("active");
  btnLong.classList.remove("active");
  btnStart.disabled = false;
  clearInterval(mitunsInterval);
  timeMinutes.innerText = "00";
  timeHour.innerText = 25;
  T = 60;
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnShort.addEventListener("click", () => {
  btnShort.classList.add("active");
  btnPomodoro.classList.remove("active");
  btnLong.classList.remove("active");
  btnStart.disabled = false;
  clearInterval(mitunsInterval);
  timeMinutes.innerText = "00";

  timeHour.innerText = 5;
  T = 60;
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnLong.addEventListener("click", () => {
  btnLong.classList.add("active");
  btnShort.classList.remove("active");
  btnPomodoro.classList.remove("active");
  btnStart.disabled = false;
  clearInterval(mitunsInterval);
  timeMinutes.innerText = "00";

  timeHour.innerText = 15;
  T = 60;
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnStart.addEventListener("click", () => {
  if (H == 0 && T == 0) {
    btnStart.disabled = true;
  } else {
    mitunsInterval = setInterval(timeMinutess, 1000);
    btnStart.style.display = "none";
    btnPause.style.display = "block";
    minutes2();
  }
});

btnPause.addEventListener("click", () => {
  clearInterval(mitunsInterval);
  btnPause.style.display = "none";
  btnStart.style.display = "block";
  clearInterval(deg1Interval);
  clearInterval(deg2Interval);
  clearInterval(deg3Interval);
  clearInterval(deg4Interval);
});

btnStop.addEventListener("click", () => {
  btnStart.disabled = false;
  clearInterval(mitunsInterval);
  btnPause.style.display = "none";
  btnStart.style.display = "block";
  btnPomodoro.classList.add("active");
  btnShort.classList.remove("active");
  btnLong.classList.remove("active");
  box1.style.setProperty("--rotate", `rotate(315deg)`);
  box2.style.setProperty("--rotate", `rotate(315deg)`);
  box3.style.setProperty("--rotate", `rotate(315deg)`);
  box4.style.setProperty("--rotate", `rotate(315deg)`);
  clearInterval(deg1Interval);
  clearInterval(deg2Interval);
  clearInterval(deg3Interval);
  clearInterval(deg4Interval);
  Times1 = 0;
  Times2 = 0;

  timeMinutes.innerText = "00";
  minutes();
  T = 60;
});

function timeMinutess() {
  // minutes2();
  H = timeHour.textContent;
  --T;
  if (T == 0) {
    --H;
    timeHour.innerText = H;
    if (H == 0) {
      if (T == 0) {
        clearInterval(mitunsInterval);
        toString(timeHour);
        toString(timeMinutes);
      }
    } else {
      T = 59;
    }
  }

  timeMinutes.innerHTML = `${T > 9 ? T : "0" + T}`;
}

function minutes() {
  if (btnPomodoro.classList.contains("active")) {
    return (timeHour.innerText = 25);
  } else if (btnShort.classList.contains("active")) {
    return (timeHour.innerText = 5);
  } else if (btnLong.classList.contains("active")) {
    return (timeHour.innerText = 15);
  }
}

function minutes2() {
  if (btnPomodoro.classList.contains("active")) {
    nimadur(25);
    return (timeHour.innerText = 24);
  } else if (btnShort.classList.contains("active")) {
    nimadur(5);
    return (timeHour.innerText = 4);
  } else if (btnLong.classList.contains("active")) {
    nimadur(15);
    return (timeHour.innerText = 14);
  }
}
