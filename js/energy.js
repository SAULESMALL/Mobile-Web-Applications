document.addEventListener('DOMContentLoaded', () => {
    const energyButtons = document.querySelectorAll('#energyOptions button');
    energyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedEnergy = button.innerText.trim();
            localStorage.setItem('selectedEnergy', selectedEnergy); // Save to localStorage
            window.location.href = 'dietary.html'; // Navigate to the next page
        });
    });
});
