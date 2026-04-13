const setupForm = document.getElementById("setup-form");

setupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const playerName = document.getElementById("player-name").value;
    const computerName = document.getElementById("computer-name").value;
    const targetScore = document.getElementById("target-score").value;

    sessionStorage.setItem("playerName", playerName);
    sessionStorage.setItem("computerName", computerName);
    sessionStorage.setItem("targetScore", targetScore);

    window.location.href = "game.html";
});
