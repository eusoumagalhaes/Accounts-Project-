//external modules 
import inquirer from "inquirer";
import chalk from "chalk";
//internal modules
import fs from 'fs';

operation()

function operation(){
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            'Create account',
            'Check your balance',
            'Deposit',
            'Withdraw',
            'Exit',

        ],
    },
])
.then((answer) => {

    const action = answer['action']
    if(action === 'Create account'){
        buildAccount()
    }

    console.log(action)
})
.catch((err) => console.log(err))
}

//Creating an account

function buildAccount(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "password",
        message: "What is your password?",
    },
    {
        type: "input",
        name: "balance",
        message: "What is your balance?",
    }
])
.then((answer) => {
    const name = answer['name']
    const email = answer['email']
    const password = answer['password']
    const balance = answer['balance']
    console.log(chalk.bgGreen.white('Thanks for choosing us !'))
    console.log(chalk.green('Define your account details'))
    console.log(chalk.green(`Name: ${name}`))
    console.log(chalk.green(`Email: ${email}`))
    console.log(chalk.green(`Password: ${password}`))
    console.log(chalk.green(`Balance: ${balance}`))
    console.log(chalk.green('Account created successfully'))
    console.log(chalk.green('Thanks for choosing us !'))
    if(fs.existsSync('./account.json')){
        console.log(chalk.green('Account already exists'))
    }else{
        fs.writeFileSync('./account.json', JSON.stringify(answer))
    }
    fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err){console.log(err)}, JSON.stringify(answer))
}).catch((err) => console.log(err))
}