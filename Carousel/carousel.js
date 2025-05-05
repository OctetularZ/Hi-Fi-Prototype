gsap.registerPlugin(ScrollTrigger)

const contents = gsap.utils.toArray(".carousel");
let scrollAnim;

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


const tabletScreen = window.matchMedia("(max-width: 850px)");

function tablet(x) {
  carouselContainter = document.querySelector('.carousel-container')
  if (!x.matches) {
    if (!scrollAnim) {
      scrollAnim = gsap.to(contents, {
        xPercent: -140 * (contents.length - 1),
        scrollTrigger: {
          trigger: ".carousel-container",
          pin: true,
          scrub: 1
        }
      });
    }
  } else {
    if (scrollAnim) {
      scrollAnim.scrollTrigger.kill(); // kill ScrollTrigger
      scrollAnim.kill(); // kill GSAP animation
      scrollAnim = null; // reset the reference
      gsap.set(contents, {
        clearProps: "all"
      }); // remove inline styles
    }
  }
}

tablet(tabletScreen);

tabletScreen.addEventListener("change", tablet);


const carouselText = document.getElementById('carousel-text');
const toggleBtn = document.getElementById('text-toggle-btn');

toggleBtn.addEventListener('click', () => {
  carouselText.classList.toggle('expanded');
  toggleBtn.textContent = carouselText.classList.contains('expanded') ?
    "Show Less" :
    "Discover More";
})