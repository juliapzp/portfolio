function showSlide(slideNumber) {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideNumber - 1].classList.add("active");
}

document.getElementById("btnsobre").addEventListener("click", function() {
  document.getElementById("sobre").scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("btntec").addEventListener("click", function() {
  document.getElementById("tecnico").scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("btnmat").addEventListener("click", function() {
  document.getElementById("trabalhos").scrollIntoView({
    behavior: 'smooth'
  });
});

window.addEventListener('DOMContentLoaded', function() {
  var containerText = document.querySelector('.container-text');
  var fundo = document.getElementById('fundo');

  function BackgroundHeight() {
    if (containerText && fundo) {
      var containerHeight = containerText.offsetHeight;
      fundo.style.minHeight = containerHeight + 'px';
    }
  }

  BackgroundHeight();

  window.addEventListener('resize', function() {
    BackgroundHeight();
  });
});