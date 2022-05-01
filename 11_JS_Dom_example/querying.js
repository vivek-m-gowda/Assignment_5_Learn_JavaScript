console.log("connected to external js");
console.log("getElementById");
var head = document.getElementById("head1");
console.dir(head);
console.log(head);


console.log("\n")
console.log("getElementByClass");
var list_of_hobbies = document.getElementsByClassName("hobby");
console.log(list_of_hobbies);


console.log("\n")
console.log("getElementsByTagName");
var list_of_para = document.getElementsByTagName("p");
console.log(list_of_para);
//list_of_para[0].innerText = "changed paragraph";
console.log(list_of_para[0]);


//document.querySelector(".hobby")// run in console 

//Manipulating style in console
//var Id=document.getElementById("heading");
//Id;
//Id.style.color="green";
//Id.style.align="centre";

var x = document.getElementsByTagName("*");
var len=x.length;
for(var i=0;i<len;i++)
{
    console.log(x[i].tagName)
}



console.log("\n")
console.log("\n")
