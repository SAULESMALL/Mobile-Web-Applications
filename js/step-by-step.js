document.addEventListener('DOMContentLoaded', () => {
    const stepText = document.getElementById('step-text');
    const nextStepBtn = document.getElementById('next-step-btn');
    const timerDisplay = document.getElementById('timer-display');
    const startTimerBtn = document.getElementById('start-timer');
    const stopTimerBtn = document.getElementById('stop-timer');
    const restartTimerBtn = document.getElementById('restart-timer');
    const resetTimerBtn = document.getElementById('reset-timer');

    let steps = JSON.parse(localStorage.getItem('recipeSteps')) || [];
    let recipeTime = localStorage.getItem('recipeTime') || "00:00";
    let currentStep = 0;

    let timerSeconds = parseTimeToSeconds(recipeTime); // Parse recipeTime to seconds
    let timerInterval = null;

    const timerAudio = new Audio('../audio/timer.wav'); // Path to audio file

    // Convert "MM:SS" to total seconds
    function parseTimeToSeconds(time) {
        const [minutes, seconds] = time.split(':').map(Number);
        return minutes * 60 + seconds;
    }

    // Convert total seconds to "MM:SS"
    function formatTime(seconds) {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const remainingSeconds = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
    }

    // Update timer display
    function updateTimerDisplay() {
        timerDisplay.textContent = formatTime(timerSeconds);
    }

    // Start Countdown
    function startCountdown() {
        if (!timerInterval && timerSeconds > 0) {
            timerInterval = setInterval(() => {
                if (timerSeconds > 0) {
                    timerSeconds--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    timerAudio.play();
                    alert("Time's up!");
                }
            }, 1000);
        }
    }

    // Stop Timer
    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Restart Timer
    function restartTimer() {
        stopTimer();
        timerSeconds = parseTimeToSeconds(recipeTime);
        updateTimerDisplay();
        startCountdown();
    }

    // Reset Timer to Initial Value
    function resetTimer() {
        stopTimer();
        timerSeconds = parseTimeToSeconds(recipeTime);
        updateTimerDisplay();
    }

    // Display Steps
    function displayStep() {
        if (currentStep < steps.length) {
            stepText.textContent = steps[currentStep];
        } else {
            stepText.textContent = "Congratulations! Recipe Complete 🎉";
            nextStepBtn.style.display = 'none';
        }
    }

    // Event Listeners
    startTimerBtn.addEventListener('click', startCountdown);
    stopTimerBtn.addEventListener('click', stopTimer);
    restartTimerBtn.addEventListener('click', restartTimer);
    resetTimerBtn.addEventListener('click', resetTimer);

    nextStepBtn.addEventListener('click', () => {
        currentStep++;
        displayStep();
    });

    // Initialize Timer and Steps
    updateTimerDisplay();
    displayStep();
});
