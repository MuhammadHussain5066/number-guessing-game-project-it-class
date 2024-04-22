#!/usr/bin/env node


import inquirer from "inquirer";

const randomnumber= Math.floor(Math.random() * 10+1)
const answer= await inquirer.prompt([
    {
        name: "guessednumber",
        type: "number",
        message: "Kindly guess a number between 1-10: "

    }
])

console.log(answer)

if (answer.guessednumber==randomnumber){
    console.log("Wow you have guessed the right number")
}

else{
    console.log("Oops you have guessed the wrong number")
}
