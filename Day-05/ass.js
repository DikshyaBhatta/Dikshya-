//create a function for withdraw and deposit of amount referring atm system
let balance = 1000;

function deposit(amount) {
    balance = balance + amount;
    return balance;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
    }
    return balance;
}

console.log(deposit(500));
console.log(withdraw(200));