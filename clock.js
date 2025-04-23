  let time = document.getElementById('time-el');
  let date = document.getElementById('date-el');

  function timer() {
    let currTime = new Date().toLocaleTimeString();
    let currDate = new Date().toLocaleDateString();

    time.textContent = currTime;
    date.textContent = currDate;
  }

  setInterval(timer, 1000);
