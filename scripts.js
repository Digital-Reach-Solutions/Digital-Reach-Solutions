document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Loop through each link and add click event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetSectionId = link.getAttribute('href').substring(1);

            // Show the target section
            const targetSection = document.getElementById(targetSectionId);
            showSection(targetSectionId);

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to show the target section
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.add('active');
    }
});
