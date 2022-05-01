console.log("coneected with external js file");
console.log("\n");
console.log("Functions")
print();
function print()
{
    console.log("happy");
}

console.log(print(7,5));
function print(a,b)
{
    return a+b;
}

console.log("\n");
var x=0;
console.log(x);
print1();
function print1()
{
    var y=0;
    x=10;
}
console.log(x);

console.log("\n");
console.log("calling function");
var faith= function()
{
    console.log("hope");

}
faith();


console.log("\n");
console.log("immediate invoked function expression");
(function (m,n)
{
    console.log(m+n);
})(4,4);


console.log("\n");
console.log("call() and apply() function ");
function p1()
{
    console.log("hello");
}
p1();
p1.call();
p1.apply();

let animal={
    name:'dog',
    eat(p,q){
        console.log(this.name + "is eating" + p+ "" +q);
    }
};
let human={
    name:'ravi'
}
animal.eat(5,'bones');
animal.eat.apply(human,[10,'chips']);

console.log("\n");
animal.eat.bind(human,[10,'chips']);


console.log("\n");
function prt(){
    console.log(this)
};
prt();



console.log("\n");
console.log("\n");
