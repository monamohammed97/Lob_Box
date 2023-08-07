document.addEventListener("DOMContentLoaded", function () {
  var formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach(function (formGroup) {
    var input = formGroup.querySelector(".form-control");
    var label = formGroup.querySelector("label");

    input.addEventListener("focus", function () {
      label.style.display = "none";
    });

    input.addEventListener("blur", function () {
      if (input.value.trim() === "") {
        label.style.display = "block";
      } else {
        label.style.display = "none";
      }
    });
  });
});
let mybutton = document.querySelector(".toTop");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    mybutton.classList.add("display-block");
    mybutton.classList.remove("display-none");
  } else {
    mybutton.classList.remove("display-block");
    mybutton.classList.add("display-none");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header").classList.add("fiexd-header");
  } else {
    document.querySelector("header").classList.remove("fiexd-header");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const button = document.querySelector(".navbar-toggler");

// Function to check if the button contains the "collapsed" class
function checkButtonState() {
  if (button.classList.contains("collapsed")) {
    document.querySelector("header").classList.remove("mobile");
    document.querySelector("#navbarSupportedContent").classList.add("d-none");
  } else {
    document
      .querySelector("#navbarSupportedContent")
      .classList.remove("d-none");
    document.querySelector("header").classList.add("mobile");
  }
  setTimeout(function () {
    document
      .querySelector("#navbarSupportedContent")
      .classList.remove("d-none");
  }, 0);
}

button.addEventListener("click", checkButtonState);

var navLinks = document.querySelectorAll(".navbar-nav a");

// Loop through each navigation link and add a click event listener
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var target = link.getAttribute("href");
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });

    link.classList.add("active");

    if (target !== "#") {
      var targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});
