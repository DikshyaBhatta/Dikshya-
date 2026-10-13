 // 1. wap using ternary to check is user is passed.
 let num = 7;
 let result = num >=40 ? "pass" : " fail"
 console.log(result);

 // 2. calculate  subtotal and discount of a product with price and quantity.use 10% discount 
let price = 1000;
let quantity = 3;
// Calculate subtotal
let subtotal = price * quantity;
// Calculate 10% discount
let discount = subtotal * 10 / 100;
// Calculate final price
let finalPrice = subtotal - discount;
console.log("Subtotal =", subtotal);
console.log("Discount =", discount);
console.log("Final Price =", finalPrice);


 // 3.calculate gross salary and net salary of employee with 10% tax assume basic salary as 20000
 let basicSalary = 20000;
// Gross salary
let grossSalary = basicSalary;
// Calculate 10% tax
let tax = grossSalary * 10 / 100;
// Net salary
let netSalary = grossSalary - tax;
console.log("Gross Salary =", grossSalary);
console.log("Tax =", tax);
console.log("Net Salary =", netSalary);