import inquirer from "inquirer";
import chalk from "chalk";
let number = Math.floor(Math.random() * 5 + 2);
inquirer.prompt([
    {
        name: "random",
        type: "input",
        message: "Please guess a number between 1-10",
    }
])
    .then((answer) => {
    const guessedNumber = parseInt(answer.random);
    if (guessedNumber == number) {
        console.log(chalk.bgGreen("You guessed the correct number!"));
    }
    else {
        console.log(chalk.bgRed("Sorry, you guessed the wrong number."));
    }
});
