function showSlide(slideNumber) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[slideNumber - 1].classList.add("active");
  
    // Rolagem suave para o slide selecionado
    var slidePosition = slides[slideNumber - 1].offsetTop;
    window.scrollTo({
      top: slidePosition,
      behavior: 'smooth'
    });
  }