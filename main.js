const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

const showTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(
    minutes
  )}<span>:</span>${addZero(seconds)} ${amPm}`;

  setTimeout(showTime, 1000);
};

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

const setBackgroundGreet = () => {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon, ";
  } else {
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = "Good Evening, ";
  }
};

const getName = () => {
  const lName = localStorage.getItem("dbg.name");
  if (lName === null) {
    name.textContent = "[Enter your name]";
  } else {
    name.textContent = lName;
  }
};

const getFocus = () => {
  const lFocus = localStorage.getItem("dbg.focus");
  if (lFocus === null) {
    focus.textContent = "[Enter your Focus for today]";
  } else {
    focus.textContent = lFocus;
  }
};

const setName = (e) => {
  if (e.KeyCode === 13) {
    localStorage.setItem("dbg.name", e.target.innerText);
    name.blur();
  } else {
    localStorage.setItem("dbg.name", e.target.innerText);
  }
};

const setFocus = (e) => {
  if (e.KeyCode === 13) {
    localStorage.setItem("dbg.focus", e.target.innerText);
    focus.blur();
  } else {
    localStorage.setItem("dbg.focus", e.target.innerText);
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBackgroundGreet();
getName();
getFocus();
