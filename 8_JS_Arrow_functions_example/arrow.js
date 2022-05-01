console.log("coneected with external js file");
console.log("\n");


const obj = {
    name: 'Sam',
    prnt: function()
    {
        console.log('a',this);
        var anotherfunc = function()
        {
            console.log('b',this);
        }
        anotherfunc();
    }
}
obj.prnt();



console.log("\n");
function canvote(age)
{
    return age>=18;
};
function candrive(age)
{
    return age>=16;
};
function canmarry(age)
{
    return age>=21;
};
console.log(candrive(11));
console.log(canvote(11));
console.log(canmarry(11));
console.log("\n");
console.log(candrive(27));
console.log(canvote(27));
console.log(canmarry(27));

console.log("\n");
function age_req(r_age)
{
    return function(age)
    {
        return age >= r_age;
    };
};
console.log(age_req(18)(27));
console.log(age_req(16)(27));
console.log(age_req(11)(27));



console.log("\n");
console.log("\n");
