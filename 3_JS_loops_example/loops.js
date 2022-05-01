console.log("coneected with external js file");
console.log("\n");
console.log("Printing numbers from 1 to 10 using for loop");
var i=1;
for(i=1;i<11;i++)
{
    console.log(i);
}


console.log("\n");
console.log("Use of forEach");
var fruits=['apple','peach','orange']
fruits.forEach(item => console.log(item));


console.log("\n");
console.log("Use of forof");
var fruits=['apple','peach','orange']
for(item of fruits)
{
    console.log(item);
}


console.log("\n");
console.log("Use of forin");
var fruits=['apple','peach','orange']
for(item in fruits)
{
    console.log(item);
}


console.log("\n");
console.log("Use of while");
var i=0;
while(i<5)
{
    console.log("currentvalue of i:" +i);
    i++;
}


console.log("\n");
console.log("Use of do while");
var i=0;
do
{
    console.log("currentvalue of i:" +i);
    i++;
}while(i<5);