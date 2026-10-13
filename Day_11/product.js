
let product = document.getElementById("productName");
let price = document.getElementById("productPrice");
let button = document.getElementById("buyBtn");
let message = document.getElementById("message");

button.addEventListener("click", function () {

    message.innerText =
        "Product: " + product.innerText +
        " | " + price.innerText;

});
