
let fruits = ["apple","orange","mango"];
console.log(fruits[1]);
//ADDING EATRA DATA USING INDEX
fruits[3]="pomogranate";
console.log(fruits);
//UPDATING THE DATA
fruits[0]="graps";
console.log(fruits);
//DELETING DATA
// delete fruits[3];
fruits.push("gauva");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("watermelon");
console.log(fruits);
fruits.shift();

//MAP AND FILTER
//map is used when we need to change every element in a given array.
//EXAMPLE
let number = [1,2,3,4,5]
number.map((num)=>{
    console.log(num* num* num);
})
let even = number.filter((num)=>{
    return num % 2 == 0
})
console.log(even);
