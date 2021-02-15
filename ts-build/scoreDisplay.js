function scoreDisplay() {
    var scoreDiv = document.getElementById("scoreDisplay");
    if (localStorage.getItem("Score") !== null) {
        var score = JSON.parse(localStorage.getItem("Score"));
        var minutes = Math.floor(score.time / 60);
        var seconds = Math.floor(score.time % 60);
        var answeredTime = minutes + ":" + seconds;
        var scoreDiv_1 = document.getElementById("scoreDisplay");
        scoreDiv_1.innerHTML = "<p>False answers: " + score.answers + " <br> Time: " + answeredTime + "</p>";
    }
    else {
        scoreDiv.innerHTML = "<p>Something has fucked up but don't worry, you're still alive. Your score too</p>";
    }
}
scoreDisplay();
