function scoreDisplay() {
  var scoreDiv = document.getElementById("scoreDisplay");
  if (this.storage.getItem("Score") !== null) {
    var score = JSON.parse(localStorage.getItem("Score"));
    var minutes = Math.floor(score.time / 60);
    var seconds = Math.floor(score.time % 60);
    var answeredTime = minutes + ":" + seconds;
    var scoreDiv_1 = document.getElementById("scoreDisplay");
    scoreDiv_1.innerHTML =
      "<h1>False answers: " + score.answers + " Time: " + answeredTime;
  } else {
    scoreDiv.innerHTML =
      "Co\u015B posz\u0142o nie tak wynik nie zosta\u0142 zapisany";
  }
}
scoreDisplay();
