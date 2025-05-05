gsap.registerPlugin(ScrollTrigger)

const contents = gsap.utils.toArray(".carousel");

const nav = document.querySelector('.nav-links')
const openNavBtn = document.querySelector('#nav-toggle-open')
const closeNavBtn = document.querySelector('#nav-toggle-close')

const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)


const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)


function tablet(x) {
  carouselContainter = document.querySelector('.carousel-container')
  if (x.matches) {
    gsap.to(contents, {
      scrollTrigger: {
        trigger: ".carousel-container",
        pin: true,
        scrub: 1
      }
    })
  } else {
    gsap.to(contents, {
      xPercent: -140 * (contents.length - 1),
      scrollTrigger: {
        trigger: ".carousel-container",
        pin: true,
        scrub: 1
      }
    })
  }
}

var tabletSize = window.matchMedia("(max-width: 850px)")

tabletSize.addEventListener("change", function () {

})