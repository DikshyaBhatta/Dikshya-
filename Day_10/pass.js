let elepass = document.getElementById("pass");

elepass.addEventListener("input", function () {

    if (elepass.value.length < 8) {
        document.getElementById("message").
        innerText="Password must be at least 8 characters"
    } else {
         document.getElementById("message").
        innerText="Password is valid"
    }

});