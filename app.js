(function() {
  let firstPlayer, secondPlayer, xScore, oScore;

  const arena = document.querySelector(".arena"),
    buttons = document.querySelectorAll(".btn"),
    reset = document.querySelector("#reset"),
    selectPlayer = document.querySelector("#select"),
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
    xScore = {
      // increment 0-7 incase one of the combinations in the streak above is selected,
      // once a full streak set (0->3) is made, game ends.
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
    arena.style.pointerEvents = "none";
    arena.style.border = "";
    
    buttons.forEach(btn => {
      btn.textContent = "-";
      btn.style.color = "black";
    });
	  
    reset.disabled = true;
    selectPlayer.disabled = false;
    playerDisplay.textContent = "";
  }
  //choose player
  selectPlayer.addEventListener("click", () => {
    selectPlayer.disabled = true;
    selectPlayer.classList.replace("enabled", "disabled");
	 
    reset.disabled = false;
    reset.classList.replace("disabled", "enabled");

    arena.style.pointerEvents = "";
    firstPlayer = Math.random() > 0.5 ? true : false;
    secondPlayer = !firstPlayer;
	  
    playerDisplay.textContent = `${firstPlayer ? "O" : "X"} goes first`;
  });

  //handle arena/buttons clicks
  arena.addEventListener("click", e => {
    // check if button !already been picked
    if (e.target.textContent !== "O" && e.target.textContent !== "X") {
      // player choose x or o
      if (e.target.tagName === "BUTTON") {
        if (firstPlayer) {
          e.target.textContent = "O";
          score = oScore;
        } else {
          e.target.textContent = "X";
          score = xScore;
        }
        //checking for score
        streaks.forEach((comb, i) => {
          if (comb.indexOf(Number(e.target.value)) !== -1) {
            score[i]++;
			// did player win?
            if (score[i] === 3) {
              streaks[i].forEach(i => {
                buttons[i].style.color = "limegreen"; // green for victory
              });
              arena.style.pointerEvents = "none";
              arena.style.border = "3px solid limegreen";
            }
          }
        });
        // flipping turns
        firstPlayer = !firstPlayer;
        secondPlayer = !secondPlayer;
      }
    }
  });

   // reset the game
  reset.addEventListener("click", () => {
    initialState(); 
	  
    reset.classList.replace("enabled", "disabled");
    selectPlayer.classList.replace("disabled", "enabled");
  });
	
  initialState();
})();
