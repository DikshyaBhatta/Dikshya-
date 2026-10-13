// events 
//event is an action that happens when clicking an element .

// function handleClick(){
//     alert("you clicked me");
//     console.log("you clicked me");

// }

// event using dom properties

// const btn=document.getElementById("btn");
// btn.ondblclick=
// function handleClick(){
//     alert("you clicked me");
//     console.log("you clicked me");

// }

// using addEventListener

const btn = document.getElementById("btn");
btn.addEventListener("mouseout", () => {
    alert("you clicked me");
    console.log("you clicked me");
})

const input = document.getElementById("input");
input.addEventListener("keydown", (event) => {
    console.log(event);
})