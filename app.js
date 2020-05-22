
/*SLIDER=====================*/

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*VIDEO*/
let vid = document.getElementById("video"); 
let button = document.getElementById("button");

button.addEventListener("click", function(){
  if(vid.paused){
    vid.play();
    button.innerHTML = "||";
    setTimeout(function(){document.getElementById("button").style.opacity="0";}, 1000);
  } else {
    vid.pause();
    button.innerHTML = ">";
  }
});

function mouseOut() {
  document.getElementById("button").style.opacity="0";
};

function mouseIn() {
document.getElementById("button").style.opacity="1";
 };
