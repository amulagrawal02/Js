function greet(name) {
    console.log('Hello', name)
}
function createGreeter(greeting) {

    function greet(name) {
        // here we treat as if name is function
        console.log(greeting, name)
    }

    return greet
}

function getName() {
    console.log(document.getElementById('namebox').value);
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')

// console.log(typeof g1,1)

console.log(greet('Arnav'))
console.log(greet('Prateek'),3)

console.log(g1('Arnav'),4)
console.log(g1('Prateek'),5)

console.log(g2('Arnav'),6)
console.log(g2('Prateek'),7)

