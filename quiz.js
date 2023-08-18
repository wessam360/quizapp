import inquirer from "inquirer";
import banner from "node-banner";
import chalk from "chalk";
import { playground } from "./playg.js";
async function ban() {
    await banner(`QUIZ APP`, `THE BEST MCQS`);
}
await ban();
export const question = [
    {
        q: chalk.blue("Which keyword is used to declare a variable in JavaScript?"),
        list: ["a) var", "b) let", "c) const", "d) variable"],
        a: "b) let"
    },
    {
        q: chalk.blue("What is the correct way to write a JavaScript comment?"),
        list: ["a) //This is a comment", "b) <!--This is a comment-->", "c) 'This is a comment", "d) /*This is a comment*/"],
        a: "a) //This is a comment"
    },
    {
        q: chalk.blue("Which built-in function is used to convert a string to an integer in JavaScript?"),
        list: ["a) parseInt()", "b) stringToInteger()", "c) toInteger()", "d) convertToInt()"],
        a: "a) parseInt()"
    },
    {
        q: chalk.blue("What will the following code output? \nconsole.log(typeof null);"),
        list: ["a) null", "b) undefined", "c) object", "d) string"],
        a: "c) object"
    },
    {
        q: chalk.blue("Which operator is used for strict equality in JavaScript?"),
        list: ["a) =", "b) ==", "c) ===", "d) -="],
        a: "c) ==="
    },
    {
        q: chalk.blue("What is the purpose of the 'return' statement in a JavaScript function?"),
        list: ["a) It defines a new variable.", "b) It terminates the function execution.", "c) It loops through an array.", "d) It imports external libraries."],
        a: "b) It terminates the function execution."
    },
    {
        q: chalk.blue("Which array method is used to add elements to the end of an array?"),
        list: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"],
        a: "a) push()"
    },
    {
        q: chalk.blue("What does the acronym 'DOM' stand for in the context of JavaScript?"),
        list: ["a) Document Object Model", "b) Data Output Management", "c) Dynamic Ordinal Module", "d) Digital Ordinance Model"],
        a: "a) Document Object Model"
    },
    {
        q: chalk.blue("Which JavaScript loop is used to iterate over the properties of an object?"),
        list: ["a) for loop", "b) while loop", "c) do-while loop", "d) for...in loop"],
        a: "d) for...in loop"
    },
    {
        q: chalk.blue("What is the purpose of the 'addEventListener' method in JavaScript?"),
        list: ["a) It adds a new HTML element to the DOM.", "b) It creates a new event in the browser.", "c) It attaches an event handler to an element.", "d) It defines a new variable."],
        a: "c) It attaches an event handler to an element."
    }
];
function startquiz() {
    let score = 0;
    inquirer.prompt([{
            name: "start",
            type: `confirm`,
            message: chalk.yellow.bold(`\nDo you want start the quiz?\n`),
        }]).then((ans) => {
        if (ans.start) {
            console.log(chalk.red(`\nyour quiz is started?\n`));
            playground(score, 0);
        }
        else {
            console.log(chalk.cyan(`HOPE SO YOU TRY NEXT TIME`));
        }
    });
}
startquiz();
