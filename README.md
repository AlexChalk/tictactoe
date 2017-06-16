# Tictactoe

A two-day challenge to implement tictactoe.

## Installation
The following assumes you have Node installed:

1. Clone the repository: `git clone git@github.com:adc17/tictactoe.git`.
2. `npm install`.

## Usage

This game has no UI at present, but you can play with the logic in your browser's terminal: `open index.html`. 

![screenshot-from-browser-terminal](http://i.imgur.com/zAGUMir.png)

## Design Notes

The brief specified to only design the business logic, but I have thought about how my logic could be integrated with a user interface. I've provided the following API for a UI to use:

* Mark a square: `game.play(square, mark)`
* Get list of all updated squares (could be used for updating a graphical display): `game.reportUpdatedSquares();`
* Clear updated squares list (for once squares have been updated on display): `game.clearUpdatedSquares();`
* Get game status (win/lose/draw/etc.): `game.checkGameStatus();`

This could be implemented roughly as follows:
```
document.getElementsByClassName("square").addEventListener('click', function(){
  game.play(this.id, mark);
  updateDisplay(game.reportUpdatedSquares());
  game.clearUpdatedSquares();
  if (game.checkGameStatus() !== 'n/a') {
    displayResult();
  }
});
```

## Tests

```
npm test
```

## Specification

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line. 

## Other notes

A challenge from the [Makers Academy](http://www.makersacademy.com) Bootcamp.
