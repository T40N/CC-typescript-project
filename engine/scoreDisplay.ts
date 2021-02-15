function scoreDisplay() {
  let scoreDiv = document.getElementById("scoreDisplay");
  if (localStorage.getItem("Score") !== null) {
    let score = JSON.parse(localStorage.getItem("Score"));
    let minutes = Math.floor(score.time / 60);
    let seconds = Math.floor(score.time % 60);
    let answeredTime = `${minutes}:${seconds}`;
    let scoreDiv = document.getElementById("scoreDisplay");
    scoreDiv.innerHTML = `<p>False answers: ${score.answers} <br> Time: ${answeredTime}</p>`;
  } else {
    scoreDiv.innerHTML = `<p>Something has fucked up but don't worry, you're still alive. Your score too</p>`;
  }
}

scoreDisplay();
