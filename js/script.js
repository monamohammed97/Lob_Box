function truncateText(element, maxLength) {
  if (element.textContent.length > maxLength) {
    const truncatedText = element.textContent.slice(0, maxLength) + " ...";
    element.textContent = truncatedText;
  }
}

function handleTextTruncation() {
  const ads = document.querySelectorAll(".ads-section .cards p");
  ads.forEach((ads) => {
    truncateText(ads, 80);
  });

  const paragraphs = document.querySelectorAll(".cards p");
  paragraphs.forEach((paragraph) => {
    if (window.innerWidth <= 1600) {
      truncateText(paragraph, 130);
    } else {
      truncateText(paragraph, 200);
    }
  });

  const titlesCard = document.querySelectorAll(".activity-card .title");
  titlesCard.forEach((title) => {
    truncateText(title, 80);
  });

  const advs = document.querySelectorAll(".card-adv p");
  const h5 = document.querySelectorAll(".card-adv h5");
  advs.forEach((adv) => {
    if (window.innerWidth < 577 && window.innerHeight > 0) {
      truncateText(adv, 170);
    } else if (window.innerWidth <= 1000) {
      truncateText(adv, 300);
    } else if (window.innerWidth <= 1400) {
      truncateText(adv, 200);
    } else if (window.innerWidth <= 1600) {
      truncateText(adv, 250);
    }
  });
  h5.forEach((el) => {
    if (window.innerWidth < 577 && window.innerHeight > 0) {
      truncateText(el, 50);
    }
  });

  const cardCollage = document.querySelectorAll(".collage .card-collage p");
  cardCollage.forEach((collage) => {
    if (window.innerWidth < 500 && window.innerHeight > 0) {
      truncateText(collage, 80);
    } else if (window.innerWidth <= 768) {
      truncateText(collage, 200);
    } else if (window.innerWidth <= 1200) {
      truncateText(collage, 120);
    } else if (window.innerWidth <= 1400) {
      truncateText(collage, 300);
    } else if (window.innerWidth <= 1600) {
      truncateText(collage, 120);
    } else {
      truncateText(collage, 200);
    }
  });

  const labs = document.querySelectorAll(".labs-slick p");
  labs.forEach((lab) => {
    truncateText(lab, 200);
  });
}

function handleWindowResize() {
  handleTextTruncation();
}

window.addEventListener("resize", handleWindowResize);
handleTextTruncation();

// counter up
let counterItems = document.querySelectorAll(".counter-item");

// Create a new Intersection Observer
let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // When a counter item becomes visible, start counting
      startCounting(entry.target);
      observer.unobserve(entry.target); // Stop observing once counted
    }
  });
});

// Observe each counter item
counterItems.forEach(function (counterItem) {
  observer.observe(counterItem);
});

function startCounting(item) {
  let count = 0;

  function counterUp() {
    count++;
    item.querySelector(".counter").innerHTML = "+" + count;
    if (count == item.querySelector(".counter").dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(
    counterUp,
    100 / item.querySelector(".counter").dataset.speed
  );
}

// dropdown
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownButtons = document.querySelectorAll(".dropdown-toggle");

//   dropdownButtons.forEach(function (button) {
//     var dropdownMenu = button.nextElementSibling;

//     button.addEventListener("mouseenter", function () {
//       dropdownMenu.classList.add("show");
//     });

//     button.addEventListener("mouseleave", function (event) {
//       var relatedTarget = event.relatedTarget;
//       if (!dropdownMenu.contains(relatedTarget)) {
//         dropdownMenu.classList.remove("show");
//       }
//     });

//     dropdownMenu.addEventListener("mouseleave", function (event) {
//       var relatedTarget = event.relatedTarget;
//       if (!button.contains(relatedTarget)) {
//         dropdownMenu.classList.remove("show");
//       }
//     });
//   });
// });
document
  .getElementById("showVideo")
  .addEventListener("hidden.bs.modal", function () {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoPlayer.src;
  });

// open first item when close all item in accordion
var accordionButtons = document.querySelectorAll(".accordion-button");
accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var collapseElement = document.querySelector(
      this.getAttribute("data-bs-target")
    );
    var isExpanded = this.getAttribute("aria-expanded") === "true";

    if (!isExpanded) {
      var collapseElements = document.querySelectorAll(".accordion-collapse");
      collapseElements.forEach(function (collapse) {
        collapse.classList.remove("show");
      });

      var firstCollapse = document.querySelector(
        ".accordion-item:first-child .accordion-collapse"
      );
      firstCollapse.classList.add("show");
    }
  });
});
