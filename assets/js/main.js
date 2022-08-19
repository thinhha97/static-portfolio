const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')
const navLink = document.querySelectorAll('.nav__link')


const linkAction = () => {
  navMenu.classList.remove('show-menu')
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

navLink.forEach((e) => e.addEventListener('click', linkAction))