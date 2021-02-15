function scoreDisplay() {
  let scoreDiv = document.getElementById("scoreDisplay");
  if (this.storage.getItem("Score") !== null) {
    let score = JSON.parse(localStorage.getItem("Score"));
    let minutes = Math.floor(score.time / 60);
    let seconds = Math.floor(score.time % 60);
    let answeredTime = `${minutes}:${seconds}`;
    let scoreDiv = document.getElementById("scoreDisplay");
    scoreDiv.innerHTML = `<p>False answers: ${score.answers} Time: ${answeredTime}</p>`;
  } else {
    scoreDiv.innerHTML = `<p>Coś poszło nie tak wynik nie został zapisany</p>`;
  }
}

scoreDisplay();
