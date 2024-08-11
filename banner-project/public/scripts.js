// public/scripts.js
// document.addEventListener('DOMContentLoaded', () => {
//     const timerElement = document.getElementById('timer');
//     let timeRemaining = parseInt(timerElement.textContent);

//     const countdown = setInterval(() => {
//         timeRemaining--;
//         timerElement.textContent = timeRemaining;

//         if (timeRemaining <= 0) {
//             clearInterval(countdown);
//             document.getElementById('banner').style.display = 'none';
//         }
//     }, 1000);
// });

// public/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    let timeRemaining = parseInt(timerElement.textContent);

    function updateCountdown() {
        if (timeRemaining <= 0) {
            document.getElementById('banner').classList.add('hidden');
            return;
        }

        // Format time as MM:SS
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        timeRemaining--;
    }

    // Initial update
    updateCountdown();

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clear interval if banner is hidden
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
    }
});

