/* Darkmode effects */
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
  }

if (localStorage.getItem('darkMode') == "true") {
    const btn = document.querySelector('.switch-container').classList;
    btn.add('active');
    myDarkMode();
  }

/* Navigation Buttons */
const navs = document.querySelectorAll('.navigation-list > li a');

navs.forEach(nav => {
    nav.href = "../index.html";
    nav.addEventListener('click', () => {
         localStorage.setItem(nav.innerHTML, true);
         console.log(localStorage)
    }) 
})

/* JavaScript API (animated borders) */
const allProjects = document.querySelectorAll('.personal-projects .project-wrapper .project-background');
const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  })
}, {
  threshold: .5,
});

allProjects.forEach(element => {
  projectsObserver.observe(element)
})
