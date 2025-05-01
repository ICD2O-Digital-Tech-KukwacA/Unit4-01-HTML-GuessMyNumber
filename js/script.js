// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Kukwac
// Created on: May 2025
// This file contains the JS functions for index.html
"use strict"

function guessGame() {
    const maxNumber = 6;
    const minNumber = 1;
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    let display = "";
    let userGuess = parseInt(document.getElementById("userGuess").value);
    if (userGuess == randomNumber) {
        display = "Correct! You guessed the number!";
    }
    if (userGuess != randomNumber) {
    display = "Incorrect! The number was " + randomNumber + ".";
    }
    document.getElementById("result").innerHTML = display; ;
}
