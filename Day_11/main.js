let elepass = document.getElementById("pass");
let elename = document.getElementById("name");

elepass.addEventListener("input", function () {

    if (elepass.value.length < 8) {
        document.getElementById("message").
        innerText="Password must be at least 8 characters"
    } else {
         document.getElementById("message").
        innerText="Password is valid"
    }

});
//for name
 elename.addEventListener("input", function () 
 { if (!/^[A-Za-z ]+$/.test(elename.value)) {
     document.getElementById("message").
     innerText = "Name must be start with alphabet"; 
    } else {
         document.getElementById("message").
         innerText = "Name is valid"; 
        } 
    });
