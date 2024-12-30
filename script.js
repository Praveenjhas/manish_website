function showAlert() {
    alert("Welcome to the GST Information Portal! More features coming soon.");
}

document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Add event listeners for update links if needed
    const updateLinks = document.querySelectorAll('.updates ul li a');
    updateLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            // You can add any additional functionality here if needed
            console.log(`Navigating to: ${this.href}`);
        });
    });

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to toggle visibility of additional updates
function toggleUpdates() {
    const hiddenUpdates = document.querySelectorAll('.hidden');
    hiddenUpdates.forEach((update) => {
        if (update.style.display === 'block') {
            update.style.display = 'none';
        } else {
            update.style.display = 'block';
        }
    });

    const showMoreButton = document.querySelector('.show-more');
    if (showMoreButton.innerHTML.includes('Show More')) {
        showMoreButton.innerHTML = 'Show Less &#9652;';
    } else {
        showMoreButton.innerHTML = 'Show More &#9662;';
    }
}