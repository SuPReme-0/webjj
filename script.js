// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
   // Select all anchor links within the navigation
   document.querySelectorAll('nav ul li a').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault(); // Prevent default anchor click behavior

           const targetId = this.getAttribute('href'); // Get the target section ID
           const targetElement = document.querySelector(targetId); // Find the target section

           // Check if targetElement exists
           if (targetElement) {
               // Scroll to the target section smoothly
               window.scrollTo({
                   top: targetElement.offsetTop - 100, // Adjust for fixed header height
                   behavior: 'smooth' // Smooth scrolling
               });
           }
       });
   });
});
