function arrowTransitionOn(arrow) {
  arrow.classList.remove("bi-arrow-down-circle-fill")
  arrow.classList.add("bi-arrow-down-circle")
}

function arrowTransitionOut(arrow) {
  arrow.classList.remove("bi-arrow-down-circle")
  arrow.classList.add("bi-arrow-down-circle-fill")
}

function goForward(arrow) {
  let sl = document.getElementById("lp")
  $('lp').scrollRight(400);
}