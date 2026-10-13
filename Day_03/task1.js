//1. Store information about an online shopping product.
// Print the product name and category.
// Check whether the product is in stock.
// Add a new property brand.
// Increase the stock by 10.
let product={
    name:"Laptop",
    category:"Electronics",
    instock:"true",
    stock:10
};
console.log(product.name);
console.log(product.category);
if (product.stock > 0) {
    console.log("Product is in stock");
} else {
    console.log("Product is out of stock");
}
product.brand = "Dell";
product.stock += 10;
console.log(product);


// 2.Real-world scenario: Create a simple bank account system.
// Print the account holder's name.
// Add branch property.
// Add isActive property.
// Display the final account balance.
let account={
    name:"Dikshya Bhatta",
     balance: 5000

}
console.log(account.name);
account.branch ="Kathmandu";
account.isactive = "true";
console.log(account.balance);
console.log(account);


//3. Store a customer's food delivery order.
// Print the customer's name.
// Print the restaurant name.
// Print the name of the first food item.
 let order={
    name:"Dikshya Bhatta",
    resturantname:"Pizza House",
    fooditem:["Momo","pizza","Burger"]
 }
 console.log(order.name);
 console.log(order.resturantname);
 console.log(order.fooditem[0]);