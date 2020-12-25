let makepromises = new Promise(function(resolve,reject){
    // let x = "example of promises";
    // let y = "example of promises";
    // if (x == y) {
    //     resolve(done);
    // }
    // else
    // {
    //     reject(done);
    // }
    let done = "Yeah! Task is complete";
    let error = "Oops! Task is not complete";
    if(error == done)
    {resolve(done);}
    reject(error);
}); 

// makepromises.then(function(done)
// {
//    console.log(done);
// },function(error)
// {
//     console.log(error);
// })

makepromises.catch(function(error)   // you can also use catch fucntion to call the reject funtion
{
    console.log(error);
})


