var modal = document.getElementById("myModal");
    var btns = document.querySelectorAll(".button-form");
    var span = document.getElementsByClassName("close")[0];

    btns.forEach(function(btn) {
      btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
      }});

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      } else {
        event.stopPropagation();
      }
    }
    