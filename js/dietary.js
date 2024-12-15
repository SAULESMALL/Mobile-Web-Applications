document.addEventListener('DOMContentLoaded', () => {
    const dietButtons = document.querySelectorAll('#dietaryOptions button');
    dietButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedDiet = button.innerText.trim();
            localStorage.setItem('selectedDiet', selectedDiet); // Save to localStorage
            window.location.href = 'recipeSuggestions.html'; // Navigate to the suggestions page
        });
    });
});
