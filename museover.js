var image = document.getElementById("image");
var head = document.getElementById("head");

// fade out

function fadeOut(head) {
  if ((head.src = "img/MG_3550.webp")) {
    image.style.backgroundImage = "url('img/MG_3550.webp')";
    head.src = "img/laestrella-2.webp";
  }
  head.style.opacity = 0;

  (function fade() {
    var val = parseFloat(head.style.opacity);
    if (!((val += 0.05) > 1.05)) {
      head.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(head) {
  if ((head.src = "img/laestrella-2.webp")) {
    image.style.backgroundImage = "url('img/laestrella-2.webp')";
    head.src = "img/MG_3550.webp";
  }
  head.style.opacity = 0;

  (function fade() {
    var val = parseFloat(head.style.opacity);
    if (!((val += 0.05) > 1.05)) {
      head.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

image.addEventListener("mouseover", Office);

function Office(e) {
  if ((head.src = "img/laestrella-2.webp")) {
    fadeIn(head);
    image.addEventListener("touchend", Dreams);
    image.removeEventListener("touchstart", Office);
  } else {
    fadeOut(head);
  }
}

image.addEventListener("mouseout", Dreams);

function Dreams(e) {
  if ((head.src = "img/01.png")) {
    fadeOut(head);
    image.removeEventListener("touchend", Dreams);
    image.addEventListener("touchstart", Office);
  } else {
    fadeIn(head);
  }
}
