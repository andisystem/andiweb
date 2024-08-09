document.addEventListener("DOMContentLoaded", function () {
    const circularProgresses = document.querySelectorAll(".circular-progress");
    const progressValues = document.querySelectorAll(".progress-value");
    const progressEndValues = [85, 85, 80, 80, 40, 30, 40, 40, 60, 40]; // WordPress: 85%, Moodle: 85%, Drupal: 80%, HTML: 80%, CSS: 40%, JavaScript: 30%, PHP: 40%, MySQL: 40%, cPanel: 60%, Google Ads: 40%
    const speed = 30;

    circularProgresses.forEach((circularProgress, index) => {
        let progressStartValue = 0;
        let progressEndValue = progressEndValues[index];

        let progress = setInterval(() => {
            progressStartValue++;

            progressValues[index].textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#3498db ${progressStartValue * 3.6}deg, #ededed 0deg)`;

            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
});