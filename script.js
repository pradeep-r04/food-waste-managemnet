function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show'); // 'show' class slides the menu in/out
}

let currentImageIndex = 0;
const images = ["./Image/image1.jpg", "./Image/image2.jpg", "./Image/image3.jpg", "./Image/image4.jpg", "./Image/image5.jpeg"]; // Replace with your paths

const sliderImages = document.querySelectorAll(".sliderImage"); // Get all images with the class 'sliderImage'

let autoSlideInterval = setInterval(changeImage, 3000); // Change image every 3 seconds

function changeImage() {
  // Hide all images first
  sliderImages.forEach(image => image.style.display = "none");

  // Update the current image index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Show the current image
  sliderImages[currentImageIndex].style.display = "block";
}

function changeSlide(direction) {
  // Hide all images first
  sliderImages.forEach(image => image.style.display = "none");

  // Update the current image index
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

  // Show the current image
  sliderImages[currentImageIndex].style.display = "block";
  
  pauseAutoSlide(); // Pause auto-slide when the user manually changes the image
}

function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
  setTimeout(() => {
    autoSlideInterval = setInterval(changeImage, 3000);
  }, 7000); // Resume auto-slide after 7 seconds
}

// Copy address to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Address copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy address:", err);
    });
}
