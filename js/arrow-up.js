arrowUpBtn = document.getElementById('btn__arrowUp');

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    arrowUpBtn.style.display = 'block';

  } else {
    arrowUpBtn.style.display = 'none';
  }
});
