"use strict";

// 'continue reading' buttons

const continueReading = document.getElementsByClassName(".continue-reading");

function contReading() {
  console.log("keep reading");
}

// 'back to the top' button
const backToTop = document.getElementsByClassName(".topOfPageBtn");

function topFunction() {
  console.log("test");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
