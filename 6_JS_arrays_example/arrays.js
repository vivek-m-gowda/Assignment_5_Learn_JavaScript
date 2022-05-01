console.log("coneected with external js file");
console.log("\n");
var arr=[1,2,3,4,5];
console.log(arr[2]);

var arr=[1,2,,4,5]; //when not assigned a value at particular place is shows as undefined
console.log(arr[2]);


console.log("Push and pop \n");
var arr=[1,2,3,4,5];
arr.push(22);
arr.push(19);
arr.push('vivek');
arr.push('ram');
console.log(arr);
arr.pop();
console.log(arr);


console.log("\n");
console.log("unshift and shift array methods \n");
let array=[1,2,'vivek'];
console.log(array);
array.unshift(3,'ram');
console.log(array);
array.shift();
console.log(array);


console.log("\n");
console.log("Splice array methods \n");
let array1=[1,2,3,4,5,6,7,8];
console.log(array1);
array1.splice(1,3,"hello");
console.log(array1);
array1.splice(1,3);
console.log(array1);


console.log("\n");
console.log("Array printing using FOR \n");
let array2=[10,9,8,7,6,5,4];
for (let i=0; i<array2.length;i++)
    {
        console.log(array2[i]+"");
    }

console.log("\n");
console.log("Array printing using FOR EACH\n");
array2.forEach(item => console.log(item+""));

console.log("\n");
console.log("Array printing using FOR OF\n");
for(item of array2)
console.log(item+"");

console.log("\n");
console.log("Array printing using FOR IN\n");
for(item in array2)
console.log(item+"");







console.log("\n");
console.log("\n");