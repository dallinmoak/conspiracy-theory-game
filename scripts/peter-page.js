// Change background color when a section is clicked
const sections = document.querySelectorAll('article p');
sections.forEach(section => {
    section.addEventListener('click', () => {
        section.style.backgroundColor = '#f9e1e1';
    });
});

// Reveal the hidden truth when button is clicked
const revealButton = document.getElementById('revealButton');
const hiddenTruth = document.getElementById('hiddenTruth');

revealButton.addEventListener('click', () => {
    hiddenTruth.style.display = 'block';
    revealButton.style.display = 'none'; // Hide the button after click
});

// Add "revealed" class to emphasize sections that have been clicked
sections.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.add('revealed');
    });
});
