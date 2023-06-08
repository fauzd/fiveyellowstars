document.addEventListener('scroll', function(e) {
  let offset = window.pageYOffset;
  let rotation;
  
  if (window.innerWidth > 1023) {
    // for screens wider than 1024px
    rotation = -40 + offset / 22; 
    if (rotation < 9) rotation = 9;
    if (rotation > 24) rotation = 24;
  } else if (window.innerWidth >= 768) {
    // for screens between 768px and 1024px
    rotation = -55 + offset / 11; 
    if (rotation < 6) rotation = 6;
    if (rotation > 16) rotation = 16;
  } else {
    // for screens smaller than 768px
    rotation = -40 + offset / 25; 
    if (rotation < 6) rotation = 6;
    if (rotation > 16) rotation = 16;
  }

  document.querySelector('.section-what-gives-image').style.transform = 'rotate(' + rotation + 'deg)';

  // finetuning
  // document.querySelector('.section-what-gives-counters').innerHTML = 
  // "Offset: " + offset + "<br>" + "Rotation dirty: " + (-57 + offset / 20) + "<br>" + "Rotation clean: " + rotation;
});