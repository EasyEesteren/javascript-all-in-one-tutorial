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
/* {
    let x = 5.2222
    console.log(x.toFixed(2));
} */

// Math object
/* {
    console.log(Math.round(0.5));
    console.log(Math.trunc(0.5));
} */

// This
/* {
    let position = {
        x: 10,
        y: 5,
        print: function(){
            console.log(this.x);
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },
    }

    position.print()
} */

// Switch statements
/* {
    let name = prompt("What is your name?");

    if (name=="HOT") alert("sweet diggly");

    switch(name){
        case "Caleb":
            console.log("Welcome!");
            break;
        case "Jamie":
            console.log("GET OUT!");
            break;
        default:
            console.log("I guess you may enter....");
            break;
    }
} */

// Do while, useful if you want the code with the do to be executed at least once
// Note varaibles defined in the do are not available in to the while statement
/* let i = 1000;
do{
    console.log(i);
    i++;
} while(i < 10); */

/* let password;
do{
    password = prompt("Guess the corret name");
} while(password.toLowerCase() !== "jamie");
alert(`Well done ${password} was the correct name!`) */


// For loop
for(let i = 0; i < 10; i++){
    console.log(i);
}