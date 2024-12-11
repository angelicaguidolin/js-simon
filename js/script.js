//DOM ELM
const countDownElm = document.getElementById("countdown")
//VARIABLES
let count = 10;
//FUNCTIONS
const timer = setInterval(function() {
  
  if (count === 0) {
    clearInterval(timer);
    countDownElm.innerHTML= "Ritenta 👎"
  
} else{
    countDownElm.innerHTML = count;
  }
  count--;

}, 1000);