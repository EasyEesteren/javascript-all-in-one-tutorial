// Testing difference block defined lets and var which are assigned to the 
/* {
    var test = "hello there";
    let lol = "hello";
    console.log(lol);
}

console.log(test);
console.log(lol); */

// Max safe integer
/* {
    var max = 5;
    console.log(Number.MAX_SAFE_INTEGER);
}
 */

// increments or decrements
/* {
    var slicesOfPizza = 10;
    slicesOfPizza++;
    slicesOfPizza--;
    console.log(slicesOfPizza);
    slicesOfPizza *= 5;
    console.log(slicesOfPizza);
} */

// Number methods
/* {
    let x = 5;
    let y = "10";
    console.log(x + y);
    console.log(Number.parseInt(x + y));
    y = Number.parseInt(y);
    console.log(x + y);

    y = "5.9";
    console.log(Number.parseInt(x + y));
    console.log(Number.parseFloat(x + y));
} */

// Decimal, Binary or hexadecimal
/* {
    var input = prompt("Put in a number yo");

    console.log("Decimal:", input);
    console.log("Binary:", Number.parseInt(input, 2));
    console.log("Binary:", Number.parseInt(input, 2));
    console.log("Octal:", Number.parseInt(input, 8));
    console.log("Hex:", Number.parseInt(input, 16));
} */

// Instance methods

{
    let x = 5.2222
    console.log(x.toFixed(2));
}

// Math object
{
    console.log(Math.round(0.5));
    console.log(Math.trunc(0.5));
}