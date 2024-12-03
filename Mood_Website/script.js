// script.js

// For mood selection
function selectMood(mood, element) {
    // Store the selected mood in localStorage
    localStorage.setItem('selectedMood', mood);

    // Highlight the selected mood option
    const allMoodOptions = document.querySelectorAll('.mood-option');
    allMoodOptions.forEach(option => {
        option.classList.remove('selected'); // Remove selected class from all options
    });

    element.classList.add('selected'); // Add selected class to clicked element

    // Show the "Next" button to proceed to the energy page
    document.getElementById('nextPage').style.display = 'block';
}

// For energy level selection
let energyLevel = 0;  // Initial energy level

function setEnergyLevel(level, element) {
    // Store energy level in localStorage
    energyLevel = level;
    localStorage.setItem('energyLevel', level);

    // Update the progress bar width based on the selected energy level
    const progressBar = document.getElementById('energyBar');
    progressBar.style.width = `${energyLevel}%`;
    progressBar.setAttribute('aria-valuenow', energyLevel);

    // Show the "Next" button once an energy level is selected
    document.getElementById('nextButton').style.display = 'block';

    // Highlight the selected energy option
    const allEnergyOptions = document.querySelectorAll('.energy-option');
    allEnergyOptions.forEach(option => {
        option.classList.remove('selected'); // Remove selected class from all options
    });

    element.classList.add('selected'); // Add selected class to clicked element
}
