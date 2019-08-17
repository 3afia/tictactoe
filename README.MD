# 3x3 Tic Tac Toe

### spaghetti code version [Click to play](https://3afia.github.io/tictactoe-3afia/)
This 3x3 tic tac toe with two players where a random function selects who plays first.
The logic of this code is that, one player has to have a streak of moves (button click) in order to win. these streaks are:
```javascript
const streaks =[
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
	]
```
that is if we visualize the palying arena as:
```
	-------------
	| 0 | 1 | 2 |
	-------------
        | 3 | 4 | 5 |
	-------------
        | 6 | 7 | 8 |
	-------------
```
The code checks if each move from the player exists in a streak, if it does, it increment a corresponding property in players score object. After every increment, the incrementing means that the player has two or more of consecutive move in a row. incremening reach 3, the player wins.

## TODO:

- [x] make sure that once a player picked a button, the other player cant pick the same button.
- [x] make a function that randomley set firstPlayer and Second player.
- [x] reset xScore and oScore, for now you have to reload the page to have clean slate.
- [x] add info messages, like: click xo to select player, and arena is reset.
