'use strict'

// 'continue reading' buttons

const continueReading = document.getElementsByClassName('.continue-reading')
// const modal = document.getElementsByClassName("modal")
// const span = document.getElementsByClassName("close")[0];

function contReading() {  
console.log("keep reading");
}

// continueReading.onclick = function() {contReading} {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
//   }

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }

// 'continue reading' modal

// let modal = document.getElementsByClassName(cr-modal)

// 'back to the top' button
const backToTop = document.getElementsByClassName('.topOfPageBtn')

function topFunction() {
console.log('test');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}