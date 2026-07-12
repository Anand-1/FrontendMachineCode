let seconds = 0;

function startSeconds() {
  const startTimer = () => {
    setInterval(() => {
      seconds++;
      console.log(`Time elapsed: ${seconds} seconds`);
      document.getElementById("seconds").innerHTML = seconds;
      if (seconds > 10) {
        clearInterval(startTimer);
      }
    }, 1000);
  };
  startTimer();
}

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startSeconds());
