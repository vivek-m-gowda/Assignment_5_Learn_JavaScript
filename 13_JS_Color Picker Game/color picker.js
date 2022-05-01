// fetching and assigning the JS variable
var noOfSquares = 6;
var arr=[];
var picked;
var squares = document.getElementsByClassName("square");
var targetColor = document.getElementById("targetColor");
var message = document.getElementById("message");
var head = document.querySelector("h1");
var reset = document.getElementById("NewColor");

// set the game on
init();
//definig init()
function init()
{
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor=arr[i];
        squares[i].addEventListener("click",function()
        {
            if(picked===this.style.backgroundColor)
            {
                message.textContent="correct";
                message.style.color="green";
                changeColor(this.style.backgroundColor);
                reset.textContent="Play Again?";
            }
            else
            {
                message.textContent="Try Again";
                message.style.color="red";
                this.style.backgroundColor="black";
            }
        });
    }
}

//reset game
reset.addEventListener("click", resetIn);

//to get random color from exsisting palette
function randomPickedColorIndex()
{
    return Math.floor(Math.random()*arr.length);
}

//to get random color in circle
function generateRandomColor(limit)
{
    var color=[];
    for (var i=0; i<limit; i++)
    color.push(rgbGenerator());
    return color;
}

//to generate a single rgb
function rgbGenerator()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}

function changeColor(color)
{
    for (var i=0; i<squares.length; i++)
    squares[i].style.backgroundColor=color;
    head.style.backgroundColor=color;
}

//reset function
function resetIn()
{
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent="";
    head.style.backgroundColor="steelblue";

    for(var i=0; i<squares.length; i++)
    squares[i].style.backgroundColor=arr[i];
}