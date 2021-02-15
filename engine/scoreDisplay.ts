function scoreDisplay() {
  let scoreDiv = document.getElementById("scoreDisplay");
  if (this.storage.getItem("Score") !== null) {
    let score = JSON.parse(localStorage.getItem("Score"));
    let minutes = Math.floor(score.time / 60);
    let seconds = Math.floor(score.time % 60);
    let answeredTime = `${minutes}:${seconds}`;
    let scoreDiv = document.getElementById("scoreDisplay");
    scoreDiv.innerHTML = `<h1>False answers: ${score.answers} Time: ${answeredTime}`;
  } else {
    scoreDiv.innerHTML = `Coś poszło nie tak wynik nie został zapisany`;
  }
}

scoreDisplay();
