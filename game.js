const inquirer = require('inquirer');

let square1 = '_';
let square2 = '_';
let square3 = '_';
let row1 = `|${square1}|${square2}|${square3}|`;

let square4 = '_';
let square5 = '_';
let square6 = '_';
let row2 = `|${square4}|${square5}|${square6}|`;

let square7 = '_';
let square8 = '_';
let square9 = '_';
let row3 = `|${square7}|${square8}|${square9}|`;

let board = (`${row1}\n${row2}\n${row3}`);

let playGameQ = 'Would you like to play tic-tac-toe? (Y/N)';

let player1Q = 'Player1 it is your turn. Which of the 9 squares would you like to place an X in?'
let player2Q = 'Player2 it is your turn. Which of the 9 squares would you like to place an O in?'
let thereIsAWinner = false


const winCheckerFunction = () => {
  "use strict";
  if(square1 === 'X' && square2 === 'X' && square3 === 'X') {
    return 1
  } else if(square4 === 'X' && square5 === 'X' && square6 === 'X') {
    return 1
  } else if(square7 === 'X' && square8 === 'X' && square9 === 'X') {
    return 1
  } else if(square1 === 'X' && square4 === 'X' && square7 === 'X') {
    return 1
  } else if(square2 === 'X' && square5 === 'X' && square8 === 'X') {
    return 1
  } else if(square3 === 'X' && square6 === 'X' && square9 === 'X') {
    return 1
  } else if(square1 === 'X' && square5 === 'X' && square9 === 'X') {
    return 1
  } else if(square3 === 'X' && square5 === 'X' && square7 === 'X') {
    return 1
  } else if(square1 === 'O' && square2 === 'O' && square3 === 'O') {
    return 2
  } else if(square4 === 'O' && square5 === 'O' && square6 === 'O') {
    return 2
  } else if(square7 === 'O' && square8 === 'O' && square9 === 'O') {
    return 2
  } else if(square1 === 'O' && square4 === 'O' && square7 === 'O') {
    return 2
  } else if(square2 === 'O' && square5 === 'O' && square8 === 'O') {
    return 2
  } else if(square3 === 'O' && square6 === 'O' && square9 === 'O') {
    return 2
  } else if(square1 === 'O' && square5 === 'O' && square9 === 'O') {
    return 2
  } else if(square3 === 'O' && square5 === 'O' && square7 === 'O') {
    return 2
  } else {
    return false
  }
}

const player1Turn = function() {
  inquirer.prompt([{name: 'player1Q', message: player1Q}])
    .then((ans) => {
      if (ans.player1Q === 1) {
        square1 = 'X';
      } else if (ans.player1Q === 2) {
        square2 = 'X';
      } else if (ans.player1Q === 3) {
        square3 = 'X';
      } else if (ans.player1Q === 4) {
        square4 = 'X';
      } else if (ans.player1Q === 5) {
        square5 = 'X';
      } else if (ans.player1Q === 6) {
        square6 = 'X';
      } else if (ans.player1Q === 7) {
        square7 = 'X';
      } else if (ans.player1Q === 8) {
        square8 = 'X';
      } else if (ans.player1Q === 9) {
        square9 = 'X';
      }
      console.log(board)
      if (winCheckerFunction()) {
        thereIsAWinner = true
      }
    })
}

const player2Turn = function() {
  inquirer.prompt([{name: 'player2Q', message: player2Q}])
    .then((ans) => {
      if (ans.player2Q === 1) {
        square2 = 'O';
      } else if (ans.player2Q === 2) {
        square2 = 'O';
      } else if (ans.player2Q === 3) {
        square3 = 'O';
      } else if (ans.player2Q === 4) {
        square4 = 'O';
      } else if (ans.player2Q === 5) {
        square5 = 'O';
      } else if (ans.player2Q === 6) {
        square6 = 'O';
      } else if (ans.player2Q === 7) {
        square7 = 'O';
      } else if (ans.player2Q === 8) {
        square8 = 'O';
      } else if (ans.player2Q === 9) {
        square9 = 'O';
      }
      console.log(board)
      if (winCheckerFunction()) {
        thereIsAWinner = true
      }
    })
}

inquirer.prompt([{name: 'playGameQ', message: playGameQ}])
  .then((ans) => {
    if(ans.playGameQ === 'y' || ans.playGameQ === 'Y') {
      console.log('Great! Welcome to Tic-Tac-Toe. Please see the board below.')
      console.log(board)
      console.log(`Player${winCheckerFunction()} is the winner!`)
    }
    else {
      console.log('Fine. don\'t play with me :(')
    }
  })



