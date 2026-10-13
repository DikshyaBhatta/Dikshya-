//1. Create a function calculateSalary(basicSalary, bonus) that calculates the employee's final salary by adding the bonus to the basic salary.  
                              
//  2. Create a function checkGrade(marks) that returns:
// 80 or above → "A"
// 60–79 → "B"
// 40–59 → "C"
// Below 40 → "Fail"                         

 //3. Create a function withdraw(balance, amount) that checks whether the user has enough balance.
// If balance is enough → return remaining balance.
// Otherwise → return "Insufficient Balance".

// 1. Calculate Salary
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

console.log(calculateSalary(20000, 3000));


// 2. Check Grade
function checkGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log(checkGrade(85));
console.log(checkGrade(65));
console.log(checkGrade(50));
console.log(checkGrade(30));


// 3. Withdraw Money
function withdraw(balance, amount) {
    if (balance >= amount) {
        return balance - amount;
    } else {
        return "Insufficient Balance";
    }
}

console.log(withdraw(5000, 2000));
console.log(withdraw(3000, 4000));