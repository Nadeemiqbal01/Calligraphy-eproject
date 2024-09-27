// script.js

// Function to open a modal when the "See More" button is clicked
document.querySelectorAll('.see-more-button').forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Function to close the modal when the close button (×) is clicked
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
