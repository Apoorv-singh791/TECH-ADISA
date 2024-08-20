window.addEventListener('load', function() {
    // Set a timeout to remove the preloader after a few seconds
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.body.classList.remove('hidden'); // Show body content
    }, 2000); // Adjust the time (in milliseconds) as needed
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
