


//Sliding navigation code
var nav = document.getElementById("nav");
rollout_bars = document.getElementById("rollout_bars");
rollin_bars = document.getElementById("rollin_bars");

function rollOut() {
    nav.style.marginLeft = "0";
    rollout_bars.style.display="none";
    rollin_bars.style.display="block";
}

function rollIn() {
  if(screen.width < 991) {
    nav.style.marginLeft = "-100%";
    rollout_bars.style.display="block";
    rollin_bars.style.display="none";
  }
}


/*BACK TO TOP ANIMATION*/
window.addEventListener('scroll', function(){
  document.getElementById('back_to_top').classList.toggle("active", window.scrollY > 500);
})



