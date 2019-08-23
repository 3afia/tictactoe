(function() {
  let firstPlayer, secondPlayer, xScore, oScore, moves, won;
  const arena = document.querySelector(".arena"),
    buttons = document.querySelectorAll(".btn"),
    reset = document.querySelector("#reset"),
    playerDisplay = document.querySelector("h5"),
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
    xScore = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    };
    oScore = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    };
    arena.style.border = "";
    buttons.forEach(btn => {
      btn.textContent = "-";
      btn.style.color = "black";
    });
    firstPlayer = Math.random() > 0.5 ? true : false;
    secondPlayer = !firstPlayer;
    playerDisplay.textContent = `${firstPlayer ? "O" : "X"} goes first`;
    arena.style.pointerEvents = "";
  }
  //handle arena/buttons clicks
  arena.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      // check if button !already been picked
      let score;
      if (e.target.textContent !== "O" && e.target.textContent !== "X") {
        if (firstPlayer) {
          e.target.textContent = "O";
          score = oScore;
        } else {
          e.target.textContent = "X";
          score = xScore;
        }
        moves++;
        //checking for score
        streaks.forEach((comb, i) => {
          if (comb.indexOf(Number(e.target.value)) !== -1) {
            score[i]++;
            // did player win?
            if (score[i] === 3) {
              streaks[i].forEach(i => {
                buttons[i].style.color = "limegreen"; // green for victory
                won = true;
                playerDisplay.textContent = `${firstPlayer ? "O" : "X"} won`;
              });
              arena.style.pointerEvents = "none";
              arena.style.border = "3px solid limegreen";
            }
          }
        });
        // flipping turns
        firstPlayer = !firstPlayer;
        secondPlayer = !secondPlayer;
        if (moves == 9 && !won) playerDisplay.textContent = "tie";
      }
    }
  });

  // reset the game
  reset.addEventListener("click", () => {
    initialState();
  });

  initialState();
})();
