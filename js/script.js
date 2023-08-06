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
    document.querySelector("header").classList.add("mobile");
    document.querySelector("#navbarSupportedContent").classList.remove("d-none");
  }
}

button.addEventListener("click", checkButtonState);
