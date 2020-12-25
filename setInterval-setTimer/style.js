function myfun()
{
    console.log("Inside the setTimeout()");
}
console.log("Print after 1sec");
setTimeout(myfun,1000)  // print one time after the 1000 ms
/* Why we does'nt call the function instead of passing function
   defination in setTimeout() and setInterval()?
   
   Because if we direct call the funtion() then their is no
   delay in the function call that why and we get the desired output
   if we want to get delay in the function we have to give funtion 
   defination

*/
setTimeout(myfun,1000)


// Exmaple of setInterval()
let run = 0;
let id = setInterval(myfun1,1000);
function myfun1()
{
    run++;
    if(run>5)
    {
        clearInterval(id)
    }
    console.log("Inside the setInterval()");
}



