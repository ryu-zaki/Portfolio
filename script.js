/* Effects of projects page */
const allNavs = document.querySelectorAll('.navigation-list > li a');
const resumeContainer = document.querySelector('section.resume');
const wholeContainer = document.querySelector('.whole-container');

const otherNavs = document.querySelectorAll('.otherNav');

const navsIdentifier = () => {
  otherNavs.forEach((element) => {
    element.addEventListener('click', () => {
      resumeContainer.classList.remove('active');
      wholeContainer.style.display = "block";
      element.click();
    })
  })
}

allNavs.forEach(nav => {
  if (localStorage.getItem(nav.innerHTML) == "true") {
    if (nav.innerHTML == "resume") {
      resumeContainer.classList.add('active');
      wholeContainer.style.display = "none";
      navsIdentifier();
    }
    localStorage.removeItem(nav.innerHTML);
    nav.click();
  }
});

/* Dark mode button */
let cssRoot = document.querySelector(':root');
const sunIcon = document.querySelector('.fa-sun');

const interestedThings = document.querySelector('.interested-section > div');
const interestedSection = document.querySelector('.interested-section');

function myDarkMode() {
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

  if (interestedThings)  interestedThings.classList.add('dark');
  if (interestedSection) interestedSection.classList.add('dark');
}
const darkModeBtn = document.querySelector('.switch');
darkModeBtn.addEventListener('click', () => {
  const btn = document.querySelector('.switch-container').classList;

  btn.toggle('active');
  if (btn[1] == 'active') {
    localStorage.setItem('darkMode', true);
    myDarkMode();
  } else {
    /* cssRoot.style.setProperty('--dark', '#353b48') */
    localStorage.setItem('darkMode', false);
    if (interestedThings) interestedThings.classList.remove('dark');
    if (interestedSection) interestedSection.classList.remove('dark');
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

/* Darkmode effect of other page */
if (localStorage.getItem('darkMode') == "true") {
  const btn = document.querySelector('.switch-container').classList;
  btn.add('active');
  myDarkMode();
}

/* Menu button effects */

const modalNav = document.querySelector('.modal-overlay');
const menuBtn = document.querySelector('nav > .container');

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

const options3 = {
  threshold: .5
}
const observer = new IntersectionObserver(callback, options);
const observer2 = new IntersectionObserver(callback2, options2);
const projectsObjserver = new IntersectionObserver(callback3, options2);
const gridSec = document.querySelector('.grid-section');
const columnCerts = document.querySelectorAll('.cert-container > section');
const projects = document.querySelectorAll('.intro-project');
const observer3 = new IntersectionObserver(callback3, options3);

function callback3(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('normal');
    }
  })
}

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

if (gridSec) observer.observe(gridSec);

columnCerts.forEach(element => {
  observer2.observe(element);
})

projects.forEach(element => {
  observer3.observe(element)
})

/* What i can provide section backgound */
const bgWicp = document.querySelector('.what-can-i-provide > div:nth-child(1)');
const front = document.querySelector('.front');
const web = document.querySelector('.web-design');
const responsive = document.querySelector('.responsive');


const wicpOptions = {
  threshold: 1
}

function wicpFunc(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      front.classList.add('normal');
      web.classList.add('normal');
      responsive.classList.add('normal');
    }
  })
}

const wicpObserver = new IntersectionObserver(wicpFunc, wicpOptions);
if (bgWicp) wicpObserver.observe(bgWicp);



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

if (html) {
  myDisplay(htmlBtn, html);
  myDisplay(jsBtn, js);
}

/* Resume section event */
const calContainer = document.querySelector('.calendar-main-container');
const resumeButton = document.querySelector('[data-resume]');
const backBtn = document.querySelectorAll('[data-back]');
const messContainer = document.querySelector('.mess-container');

if (!!resumeContainer) {
    resumeButton.addEventListener('click', () => {
    resumeContainer.classList.add('active');
    wholeContainer.style.display = "none";

    navsIdentifier();
  })
}

if (!!backBtn) {
 backBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    resumeContainer.classList.remove('active');
    calContainer.classList.remove('active');
    messContainer.classList.remove('active');
    wholeContainer.style.display = "block";
  })
 })
}

/* Things im interested in API */
const wholeGrid = document.querySelector('.resume > .interested-section > div');
const allCards = document.querySelectorAll('.interested-section > div > *');
const cardsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.add('normal');
      }
    }
  })
}, {
  threshold: .6,
});

if (wholeGrid) cardsObserver.observe(wholeGrid);



/* Calendar Section */

/* Validations */
const form = document.querySelector('.fillup-section form');
const messCon = document.querySelector('.mess-container');
const calendar = document.querySelector('.calendar-main-container');


form.addEventListener('submit', (e) => {
  messCon.classList.add('active');
  e.preventDefault();
})

const bookingBtn = document.querySelector('[data-booking]');
bookingBtn.addEventListener('click', () => {
  wholeContainer.style.display = "none";
  calendar.classList.add('active');
}) 