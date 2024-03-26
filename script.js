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

  window.addEventListener('DOMContentLoaded', function() {
    var sobre = document.getElementById('sobre');
    var fundo = document.getElementById('fundo');
  
    function BackgroundHeight() {
      if (sobre && fundo) {
        var sobreHeight = sobre.offsetHeight;
        fundo.style.height = sobreHeight + 'px';
      }
    }
  
    BackgroundHeight();
  
    window.addEventListener('resize', function() {
      BackgroundHeight();
    });
  });