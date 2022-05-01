console.log("coneected with external js file");
console.log("\n");



console.log("Try and catch block");
try
{
    console.log(a);
    console.log("end of code");
}
catch(error)
{
    console.log("we got an error--->"+error)
}


console.log("\n")
console.log("Throw and Finally block");
function isEllgibleToVote(age)
{
    if(age<18)
    try
    {
        throw new Error("you are under age");
    }
    catch(error)
    {
        console.log(error);
    }
    finally
    {
        console.log("program ended");
    }
    else
    {
        console.log("you are eligible to vote")
    }
}
isEllgibleToVote(18)













console.log("\n");
console.log("\n");
