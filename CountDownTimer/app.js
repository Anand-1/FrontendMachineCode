(function () {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");
  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countdownTimer = null;
  var isRunning = false;

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function parseTimeValue(input) {
    var value = parseInt(input.value, 10);
    return Number.isNaN(value) ? 0 : value;
  }

  function setTimeDisplay(hours, minutes, seconds) {
    hour.value = pad(hours);
    min.value = pad(minutes);
    sec.value = pad(seconds);
  }

  function getTotalSeconds() {
    return parseTimeValue(hour) * 3600 + parseTimeValue(min) * 60 + parseTimeValue(sec);
  }

  function startInterval() {
    if (isRunning) return;

    var totalSeconds = getTotalSeconds();
    if (totalSeconds <= 0) return;

    isRunning = true;
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";

    countdownTimer = setInterval(function () {
      timer();
    }, 1000);
  }

  function stopInterval(state) {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }

    isRunning = false;
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
  }

  function timer() {
    var totalSeconds = getTotalSeconds();

    if (totalSeconds <= 1) {
      setTimeDisplay(0, 0, 0);
      stopInterval();
      return;
    }

    totalSeconds -= 1;

    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    setTimeDisplay(hours, minutes, seconds);
  }

  startBtn.addEventListener("click", function () {
    startInterval();
  });

  stopBtn.addEventListener("click", function () {
    stopInterval("pause");
  });

  resetBtn.addEventListener("click", function () {
    setTimeDisplay(0, 0, 0);
    stopInterval();
  });
})();
