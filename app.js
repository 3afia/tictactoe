(function() {
  let firstPlayer, secondPlayer, xScore, oScore, moves, won;

  const arena = document.querySelector(".arena"),
    buttons = document.querySelectorAll(".btn"),
    reset = document.querySelector("#reset"),
    status = document.querySelector("h5"),
    streaks = [
      // if a player clicked/selected these buttons, they win.
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

  function initialState() {
    moves = 0;
    won = false;

    xScore = [0, 0, 0, 0, 0, 0, 0, 0];
    oScore = [0, 0, 0, 0, 0, 0, 0, 0];

    buttons.forEach(btn => {
      btn.textContent = "-";
      btn.style.color = "black";
    });

    firstPlayer = Math.random() > 0.5 ? true : false;
    secondPlayer = !firstPlayer;
    status.textContent = `${firstPlayer ? "O" : "X"} goes first`;

    arena.style.border = "";
    arena.style.pointerEvents = "";
  }

  //handle arena/buttons clicks
  arena.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      let score;
      // check if button !already been picked
      if (e.target.textContent !== "O" && e.target.textContent !== "X") {
        if (firstPlayer) {
          e.target.textContent = "O";
          score = oScore;
        } else {
          e.target.textContent = "X";
          score = xScore;
        }
        //checking for score
        streaks.forEach((streak, i) => {
          if (streak.indexOf(Number(e.target.value)) !== -1) {
            score[i]++;
            // did player win?
            if (score[i] === 3) {
              won = true;

              status.textContent = `${firstPlayer ? "O" : "X"} won`;

              streaks[i].forEach(i => (buttons[i].style.color = "limegreen"));

              arena.style.pointerEvents = "none";
              arena.style.border = "3px solid limegreen";
            }
          }
        });
        // flipping turns
        firstPlayer = !firstPlayer;
        secondPlayer = !secondPlayer;

        // next move
        moves++;
      }
      if (moves === 9 && !won) status.textContent = "tie";
    }
  });

  // reset the game
  reset.addEventListener("click", () => {
    initialState();
  });

  initialState();
})();
