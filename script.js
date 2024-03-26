function showSlide(slideNumber) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[slideNumber - 1].classList.add("active");
}

  document.getElementById("btnsobre").addEventListener("click",function(){ 
    document.getElementById("sobre").scrollIntoView({
      behavior: 'smooth'
    })

  })