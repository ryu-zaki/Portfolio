/* Side Navigation Variables */
const gtrthanBtn = document.querySelector('.fa-play');
const navigationSide = document.querySelector('[data-sideNav]');
const nameDescription = document.querySelector('.name-description');

gtrthanBtn.addEventListener('click', (e) => {
    navigationSide.classList.remove('deac');
    gtrthanBtn.classList.remove('active');
    nameDescription.classList.add('margin');
})

window.addEventListener('click', (e) => {
    if (e.target !== navigationSide && e.target !== gtrthanBtn) {
        navigationSide.classList.add('deac');
        gtrthanBtn.classList.add('active');
        nameDescription.classList.remove('margin');
    }
})

/* Dark mode button */
let cssRoot = document.querySelector(':root');
const sunIcon = document.querySelector('.fa-sun');

const darkModeBtn = document.querySelector('.switch');
darkModeBtn.addEventListener('click', () => {
    const btn = document.querySelector('.switch-container').classList;
    
    btn.toggle('active');
    if (btn[1] == 'active') {
      cssRoot.style.setProperty('--dark', '#f4f4f4');
      cssRoot.style.setProperty('--darkdark', '#f4f4f4');
      cssRoot.style.setProperty('--white', '#333');
      cssRoot.style.setProperty('--light', '#444');
      cssRoot.style.setProperty('--lightGray', '#222');
      cssRoot.style.setProperty('--project-color', '#444');
      cssRoot.style.setProperty('--projectNum-color', '#fff');
      cssRoot.style.setProperty('--boxShadowColor', 'rgba(250, 250, 250, .1)');
      sunIcon.classList.remove('fa-sun');
      sunIcon.classList.add('fa-moon');

    } else {
      /* cssRoot.style.setProperty('--dark', '#353b48') */
      cssRoot.style.setProperty('--dark', '#353b48');
      cssRoot.style.setProperty('--darkdark', '#222');
      cssRoot.style.setProperty('--white', '#fff');
      cssRoot.style.setProperty('--light', '#ddd');
      cssRoot.style.setProperty('--lightGray', '#f4f4f4');
      cssRoot.style.setProperty('--project-color', '#222');
      cssRoot.style.setProperty('--projectNum-color', '#ddd');
      cssRoot.style.setProperty('--boxShadowColor', 'rgba(17, 17, 26, 0.1)');
      sunIcon.classList.remove('fa-moon');
      sunIcon.classList.add('fa-sun');
    }

})

/* Menu button effects */

const modalNav = document.querySelector('.modal-overlay');
function myFunction(x) {
    const btn = x.classList;
    btn.toggle("change");

    if (btn[1] == 'change') {
       modalNav.classList.add('active');
    } else {
       modalNav.classList.remove('active');
    }
}

/* JavaScript API */ 
const options = {
    threshold: .9,
};

const options2 = {
    threshold: 1
}
const observer = new IntersectionObserver(callback, options);
const observer2 = new IntersectionObserver(callback2, options2);
const gridSec = document.querySelector('.grid-section');
const columnCerts = document.querySelectorAll('.cert-container > section');
const projects = document.querySelectorAll('.intro-project');



function callback(entries, observer) {
  entries.forEach(entry => {
     if (entry.isIntersecting) {
       projects.forEach(element => {
        element.classList.add('normal');
       })
     }
  });
}

function callback2(entries, observer) {
  entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('normal')
     } 
  });
}

observer.observe(gridSec);
columnCerts.forEach(element => {
  observer2.observe(element);
})


/* Certificates modal */

const htmlBtn = document.querySelector('[data-web]');
const jsBtn = document.querySelector('[data-javascript]');
const js = document.querySelector('.JavaScript');
const html = document.querySelector('.web');


function myDisplay(viewBtn, container) {
  viewBtn.addEventListener('click', () => {
    container.classList.add('active');
  })

  const xBtn = container.querySelector('[data-xBtn]');
  xBtn.addEventListener('click', () => {
    container.classList.remove('active');
  })
}

myDisplay(htmlBtn, html);
myDisplay(jsBtn, js);



