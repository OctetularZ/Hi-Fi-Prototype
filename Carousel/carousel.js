function arrowTransitionOn(arrow) {
  arrow.classList.remove("bi-arrow-down-circle-fill")
  arrow.classList.add("bi-arrow-down-circle")
}

function arrowTransitionOut(arrow) {
  arrow.classList.remove("bi-arrow-down-circle")
  arrow.classList.add("bi-arrow-down-circle-fill")
}

gsap.registerPlugin(ScrollTrigger)

const contents = gsap.utils.toArray(".carousel");

gsap.to(contents, {
  xPercent: -140 * (contents.length - 1),
  scrollTrigger: {
    trigger: ".carousel-container",
    pin: true,
    scrub: 1
  }
})