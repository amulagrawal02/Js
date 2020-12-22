console.log(this);

let obj = {
    name: "Amul",
    roll_no : 19,
    school: "KVS",
    
    d : function()
    {
        console.log(this)
    },
    e : function()
    {
        console.log(this)
    }
};
let obj2 = {
    s : function()
    {
        console.log(this);
    }
}