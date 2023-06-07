window.onload = function() {
  Marquee3k.init();
};

// Function to change data-speed attribute
function changeDataSpeed() {
  var marquee = document.querySelector('.marquee3k');

  if (window.innerWidth <= 1023) {
      marquee.setAttribute('data-speed', '2');
  } else {
      marquee.setAttribute('data-speed', '1');
  }

  Marquee3k.init();
}

// Call the function when the page is loaded
changeDataSpeed();

// Call the function whenever the window is resized
window.addEventListener('resize', changeDataSpeed);

// Function to switch off pause attribute
function pauseOff() {
  var marquee = document.querySelector('.marquee3k');

  if (window.innerWidth <= 768) {
      marquee.setAttribute('data-pausable', 'false');
  } else {
      marquee.setAttribute('data-pausable', 'true');
  }

  Marquee3k.init();
}

// Call the function when the page is loaded
pauseOff();


document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        dropdown.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdown.setAttribute('aria-expanded', 'false');
    });
});

document.querySelectorAll('.dropdown').forEach(function(dropdown) {
var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
var dropdownMenu = dropdown.querySelector('.dropdown-menu');
var dropdownLinks = dropdownMenu.querySelectorAll('.dropdown-menu-link');

dropdownToggle.addEventListener('focus', function() {
    dropdown.setAttribute('aria-expanded', 'true');
});

dropdownToggle.addEventListener('blur', function() {
    setTimeout(function() {
        if (!dropdownMenu.contains(document.activeElement)) {
            dropdown.setAttribute('aria-expanded', 'false');
        }
    }, 0);
});

dropdownLinks.forEach(function(link, index) {
    link.addEventListener('blur', function() {
        setTimeout(function() {
            if ((index === dropdownLinks.length - 1 && !dropdown.contains(document.activeElement)) ||
                (index === 0 && !dropdown.contains(document.activeElement) && document.activeElement !== dropdownToggle)) {
                dropdown.setAttribute('aria-expanded', 'false');
                }
            }, 0);
        });
    });
});

//Обработчик бургера и выпадающего меню
const nav = document.querySelector('.nav-list');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');

    // Закрытие всех выпадающих меню при закрытии общего меню
    if (!burger.classList.contains('active')) {
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            dropdown.classList.remove('active');
            dropdown.setAttribute('aria-expanded', 'false');
        });
    }

    // Запрет прокрутки, когда меню открыто
    if (burger.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.nav-item.dropdown');

  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function(event) {
        this.classList.toggle('active');
        // event.preventDefault();
    });
  }
}); 


//Buttons visual
const buttons = document.querySelectorAll('.btn-gradient');

buttons.forEach((button) => {
  button.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width * 100;
    this.style.background = `linear-gradient(90deg, #FCCA23 0%, #FB7171 ${percent}%)`;
  });
  button.addEventListener('mouseleave', function() {
      this.style.background = '';
  });
});