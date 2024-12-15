document.addEventListener('DOMContentLoaded', () => {
    const moodButtons = document.querySelectorAll('#moodOptions button');
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedMood = button.innerText.trim();
            localStorage.setItem('selectedMood', selectedMood); // Save to localStorage
            window.location.href = 'energy.html'; // Navigate to the next page
        });
    });
});
