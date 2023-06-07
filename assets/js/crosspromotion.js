
document.addEventListener('scroll', function(e) {
  let offset = window.pageYOffset;
  let rotation = 80 + offset / 25; 
  if (rotation < 115) rotation = 115;
  if (rotation > 170) rotation = 170;
  document.querySelector('.section-what-gives-image').style.transform = 'rotate(' + rotation + 'deg)';

  // document.querySelector('.section-what-gives-counters').innerHTML = 
  // "Offset: " + offset + "<br>" + "Rotation: " + rotation;
});