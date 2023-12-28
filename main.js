
document.addEventListener('DOMContentLoaded', function() {
    // Create a new Typed instance
    let type = new Typed('#change-text', {
      strings: ["Frontend Developer", "Web Developer", "MERN Stack Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  });
  function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show-menu');
}
