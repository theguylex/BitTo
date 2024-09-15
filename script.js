// Toggle navigation menu on mobile screens
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Modal pop-up functionality
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block"; // Change the CSS 'display' property of the modal element to 'block'
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; // Change the CSS 'display' property of the modal element to 'none'
}

// Carousel functionality to automate image slides
let currentIndex = 0; // track current index
const autoSlideInterval = 3000; // 3 seconds interval between slides

// creating function to display slide
function showSlide(index) {
  const carousel = document.getElementById("carousel");

  const slides = carousel.children;
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// creating function to move to the next slide in the carousel
function nextSlide() {
  showSlide(currentIndex + 1);
}

// creating function to move to the previous slide in the carousel
function prevSlide() {
  showSlide(currentIndex - 1);
}

// creating function to automatically move to next slide after set interval
function autoSlide() {
  nextSlide();

  setTimeout(autoSlide, autoSlideInterval);
}

// creating an Event listener to run certain codes when HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);

  setTimeout(autoSlide, autoSlideInterval);
});

// Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-button");
// 'forEach' is an array method that executes a provided function once for each array element
accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling; // 'nextElementSibling' gets the next sibling element

    content.style.display =
      content.style.display === "block" ? "none" : "block"; // This creates a show/hide effect for the accordion content

    this.classList.toggle("active"); // to change the appearance of the button to indicate it is active or not
  });
});

// Declaring function for form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  const errorMessage = document.getElementById("errorMessage");

  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required!";
    return false;
  }

  if (!validateEmail(email)) {
    errorMessage.textContent = "Please enter a valid email address!";
    return false;
  }

  errorMessage.textContent = "";
  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Map section
//function initMap() {
// Coordinates for the center of the map
// var location = { lat: -34.397, lng: 150.644 };

// Create a new map centered at the location
//var map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 8,
//   center: location,
//  });

// Add a marker at the location
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });
// }

// Initialize the map once the window has loaded
//window.onload = initMap;
