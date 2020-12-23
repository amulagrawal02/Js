console.log("inside the js ")
let obj1 = {
    name : "Amul",
    city : "shivpuri",
    age : 18,
    year : 2
}
console.log(obj1.prototype)
function fun()
{
    console.log("heloo");
}
// create our own prototype funtion
Array.prototype.heelo = function(){
    console.log("Hello we create the prototype.heloo");
};
// edit in predefined function of Array.prototype.join()
Array.prototype.joinOrginal = Array.prototype.join;
Array.prototype.join = function()
{
    console.log("join called on",this);
    return this.joinOrginal(...arguments);
}