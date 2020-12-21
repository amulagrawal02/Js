console.log("inside the js file");
function city(name,rating)
{
    this.name = name;
    this.rating = rating;
}


let fruits = {
    name : "Apple",
    price : 50,
    color : "red",
    quality : "good"
};
// class declarartion (does't support hoisting)
class car
{
    constructor(name,price,color,year)
    {
        this.name = name;
        this.price = price;
        this.color = color;
        this.year = year;
    }
}

let car1 = new car('bmw',400000,"black",2020);

let car2 = class{
    constructor(name,price,color,year)
    {
        this.name = name;
        this.price = price;
        this.color = color;
        this.year = year;
    }

}

let car3 = new car2("mercedes",800000,"while",2020);

