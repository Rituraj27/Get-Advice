// "use strict";

const adviceEl = document.querySelector(".advice");
const btnEl = document.querySelector(".btn");
const numberEl = document.querySelector(".number");

const getAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);

  advice = data.slip.advice;
  count = count + 1;

  adviceEl.textContent = advice;
  numberEl.textContent = count;
};

let count = 0;
let advice;
getAdvice();

btnEl.addEventListener("click", getAdvice);
