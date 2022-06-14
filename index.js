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

let T = 60;
let mitunsInterval;
let timeInterval;

btnPomodoro.addEventListener("click", () => {
  btnPomodoro.classList.add("active");
  btnShort.classList.remove("active");
  btnLong.classList.remove("active");
  clearInterval(mitunsInterval);
  timeHour.innerText = 25;
  timeMinutes.innerText = "00";
  T = 60;
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnShort.addEventListener("click", () => {
  btnShort.classList.add("active");
  btnPomodoro.classList.remove("active");
  btnLong.classList.remove("active");
  clearInterval(mitunsInterval);
  timeHour.innerText = 5;
  timeMinutes.innerText = "00";
  T = 60;
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnLong.addEventListener("click", () => {
  btnLong.classList.add("active");
  btnShort.classList.remove("active");
  btnPomodoro.classList.remove("active");
  clearInterval(mitunsInterval);
  timeHour.innerText = 15;
  timeMinutes.innerText = "00";
  T = 60;
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnStart.addEventListener("click", () => {
  mitunsInterval = setInterval(timeMinutess, 1000);
  btnStart.style.display = "none";
  btnPause.style.display = "block";
});

// timeInterval = setInterval(timer, 200);

function timer() {
  let style = getComputedStyle(box1, "::before");
  let style2 = style.getPropertyValue("transform");
  //   style.setProperty('transform','rotate(-40deg)')
  console.log(style2);
}
timer();

btnPause.addEventListener("click", () => {
  clearInterval(mitunsInterval);
  btnPause.style.display = "none";
  btnStart.style.display = "block";
});

btnStop.addEventListener("click", () => {
  clearInterval(mitunsInterval);
  btnPause.style.display = "none";
  btnStart.style.display = "block";
  btnPomodoro.classList.add("active");
  btnShort.classList.remove("active");
  btnLong.classList.remove("active");
  minutes();
  timeMinutes.innerText = "00";
  T = 60;
});

function timeMinutess() {
  minutes2();
  --T;
  if (T == 0) {
    timeMinutes.innerText = "00";
    --H;
    timeHour.innerText = H;
    if (H == 0) {
      if (T == 0) {
        clearInterval(mitunsInterval);
      }
    } else {
      T = 59;
    }
  }

  timeMinutes.innerHTML = `${T > 10 ? T : "0" + T}`;
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
    return (timeHour.innerText = 24);
  } else if (btnShort.classList.contains("active")) {
    return (timeHour.innerText = 4);
  } else if (btnLong.classList.contains("active")) {
    return (timeHour.innerText = 14);
  }
}
