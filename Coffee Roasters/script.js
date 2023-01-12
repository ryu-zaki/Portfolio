/* Variables */
const menuBtn = document.querySelector('[data-menu]');
const xBtn = document.querySelector('[data-xBtn]');
const list = document.querySelector('[data-visibility]');

menuBtn.addEventListener('click', () => {
    list.setAttribute('data-visibility', 'true');
    menuBtn.style.display = "none";
    xBtn.style.display = "block";
})

xBtn.addEventListener('click', () => {
    list.setAttribute('data-visibility', 'false');
    menuBtn.style.display = "block";
    xBtn.style.display = "none";
})

/* Moving Dots */

let i = 0;
function myFunction() {
  const dots = document.querySelectorAll('.circle');

  dots[i].classList.remove('circle-active');
  i++;
  if (i == 3) {
    i = 0;
  }
  dots[i].classList.add('circle-active')
}

 setInterval(myFunction, 2000); 