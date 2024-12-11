//DOM ELM
const countDownElm = document.getElementById("countdown")
const numbDiv= document.getElementById("numbers")
const formNumbHid= document.getElementById("random-number-hidden")
const randomNumbShowRes= document.getElementById("random-number-show-result")
//VARIABLES
let count = 5;
const arrayRandomNumb = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
numbDiv.textContent = arrayRandomNumb.join(' - ');
console.log(numbDiv)
//FUNCTIONS
const timer = setInterval(function() {
  countDownElm.innerHTML = count;
  if (count === 0) {
    clearInterval(timer);
    numbDiv.classList.add("d-none")
   
  }
  count--;

}, 1000);