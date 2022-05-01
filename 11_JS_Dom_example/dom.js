console.log("connected to external js");
console.log(document);
console.dir(document);
console.log(document.domain); 
console.log(document.URL); 
console.log(document.body); 
console.log(document.head); 
console.log(document.title);
console.log(document.all);
console.log(document.all[2]);
//document.title = 12345;   

//window.open("","",width=100,height=100); this line pops new web browsser window
//window.print() // to print the current window
//window.open("https://google.com") //to open other webpage
console.log("\n")
console.log("checking window alerts")
var age = prompt(" please enter ypur age:");
if(age>20)
{
    alert("Great you are a valid user/visitor");
}
else
{
    alert("try again");
}

console.log("\n")
console.log("checking window prompt")
window.prompt("Good to have you");


console.log("\n")
console.log("\n")

