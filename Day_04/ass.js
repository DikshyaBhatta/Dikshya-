const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 3000 },
    { name: "Headphones", price: 7000 }
];

console.log("Product Names:");

products.map(function(product) {
    console.log(product.name);
});

console.log("Products having price greater than 5000:");

const expensiveProducts = products.filter(function(product) {
    if (product.price > 5000) {
        return true;
    } else {
        return false;
    }
});

expensiveProducts.map(function(product) {
    console.log(product.name);
});