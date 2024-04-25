#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    INR: 74.57,
    PKR: 280
};
let condition = true;
while (condition) {
    let user_answer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            choices: ["USD", "EUR", "INR", "PKR"],
            message: "Enter from currency "
        },
        {
            name: "to",
            type: "list",
            choices: ["USD", "EUR", "INR", "PKR"],
            message: "Enter to currency"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your amount"
        }
    ]);
    let fromAmount = currency[user_answer.from];
    let toAmount = currency[user_answer.to];
    let amount = user_answer.amount;
    let baseAmount = amount / fromAmount; //USD base currency
    let convertedAmount = baseAmount * toAmount;
    let condition = convertedAmount;
    console.log(convertedAmount);
}
