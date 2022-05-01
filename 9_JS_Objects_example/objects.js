console.log("coneected with external js file");
console.log("\n");


console.log("CONSTRUTOR");
class box
{
    constructor(length){
        this.length=length;
        console.log("constructor called")
    }
    display(){
        console.log(this);
    }
}
let ob1 = new box(20);
ob1.display();

console.log("\n")
console.log("ENCAPSULATION");
class student
{
    constructor(rollno, name)
    {
        this.rollno=rollno;
        this.name=name;
    }
    attendance()
    {
        console.log(this.name +" is present");
        console.log("rollno "+this.rollno +" is present");

    }
}
let adam = new student(20, 'adam');
adam.attendance();


console.log("\n")
var parent=
{
    name:'Father',
    sing()
    {
        console.log("singing..... ");
    },
    eat: function()
    {
        console.log("eating ");
    },
    drink: ()=>{
        console.log("drinking ");
    }
};
var child ={
    name:"son",
    eat()
    {
        console.log("eating ");
    }
};

child.__proto__=parent;
for(let p in child)
{
    console.log(p+""+ child.hasOwnProperty(p))
}


console.log("\n");
console.log("Inheritance")
class Fruits
{
    constructor(color)
    {
        this.color=color;
    }
    print1()
    {
        console.log(this);
    }
}
class Apple extends Fruits
{
    constructor(color, type)
    {
        super(color);
        this.type= type;
    }
    print()
    {
        console.log(this);
    }
}
let obj = new Apple("red", "apple");
obj.print();
let obj1 = new Fruits("green");
obj1.print1();


console.log("\n")
console.log("Polymorphism");
class Fruit
{
    constructor(color)
    {
        this.color=color;
    }
    printit()
    {
        console.log(this);
    }
    printit(size)
    {
        console.log(size);
    }
}

let objj = new Fruit("red");
objj.printit(10);
objj.printit();


console.log("\n")
console.log("Method overriding");
class par
{
    live()
    {
        console.log("Iran");
    }
}
class chi extends par
{
    live()
    {
        console.log("india");
    }
}
var obbb=new chi();
obbb.live();