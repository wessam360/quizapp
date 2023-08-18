import inquirer from "inquirer"
import { question } from "./quiz.js"
import chalk from "chalk";
let userans:any[]=[];
let correctans:any[]=[];
export function playground(score:number,index:number){
    if(index<question.length){
        inquirer.prompt([{
            name:`q`,
            type:`list`,
            message:question[index].q,
            choices:question[index].list
        }]).then((ans:any)=>{
userans[index]=ans.q;
correctans[index]=question[index].a;
            if(ans.q===question[index].a){
                score++;
                console.log(chalk.green(`\nYou Are Correct\n`))
            }
            else{
            console.log(chalk.red(`\nYou are wrong\n`))
            }
            playground(score,index+1);
        }

        )
    }
    else{
        console.log(chalk.red(`\n quiz is ended.\n you got ${score} out of 10.\n your answers are : \n`))
        userans.forEach((val)=>{console.log(chalk.gray(val))})
console.log(chalk.green(`\ncorrect answers are : \n`));
  correctans.forEach((val)=>{console.log(chalk.blue(val))})
    }
}

