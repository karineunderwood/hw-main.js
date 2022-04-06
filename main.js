'use strict';
function changeColor() {
    const colorChangeEls = document.querySelectorAll('color-change');

    for (const elm of colorChangeEls){
        elm.classList.add('red');

    }

}

function validNum(evt) {
    evt.preventDefault();

    const numberInput = document.querySelectorAll('#number-input');
    const userNum = Number(numberInput.value);

    const formFeedback = document.querySelector('#formFeedback');
    if (isNaN(userNum) || userNum >= 10) {
        formFeedback.innerText = 'Please enter a smaller number';
     } else {
        formFeedback.innerText = 'You are good to go!';
       }
}

document.querySelector('color-change').addEventListener('click', changeColor)
document.querySelector('number-form').addEventListener('submit', validNum)