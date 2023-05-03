"use strict";

var arrowUpBtn = document.getElementById('btn__arrowUp');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100 * window.innerHeight) {
    arrowUpBtn.style.display = 'block';
  } else {
    arrowUpBtn.style.display = 'none';
  }
});