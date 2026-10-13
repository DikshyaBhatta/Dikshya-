//A FUNCTION IS A RESUABLE CODE THAT PERFORMS SPECIFIC TASK
//function without Paramater
function greet(){
    console.log("Hello Everyone");
}
greet();
greet();
greet();

//function with Paramater
function sayhello(name){
    console.log("hello "+name);
}
sayhello("Dikshya");

//function with return value
function greeting(name){
    return ("hello" +name);
}
console.log(greeting  ("Dikshya"));