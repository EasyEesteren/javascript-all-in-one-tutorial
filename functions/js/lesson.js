// Exploring object referencing vs primitive value referencing
/* {
    let x = { name: "Jamie"};
    function rename (x){
        x.name = "lolz"
    };
    console.log(x.name);
    rename(x);
    console.log(x.name);

    let y = 5;
    function new_val(y){
        y += 1
    };
    console.log(y);
    new_val(y);
    console.log(y);
} */

// Function declaration
/* {
    function pow(x, y){
        let total = 1;
        for(let i=0; i < y; i++){
            total *= x;
        }
        return total;
    }
    console.log(pow(3,3));
} */

/* // Function expression
{
    let myFunc = function (x, y){
        let total = 1;
        for(let i=0; i < y; i++){
            total *= x;
        }
        return total;
    }
    console.log(myFunc(3,3));
} */

// Hoisting: refers to what is scanned into memory in the first execution of js code
// javascript code is scanned first and then excecuted so the code is run through twice
// variables are assigned the value of UNDEFINED on the first run through. Therefore, FUNCTION EXPRESSIONS
// are given the value of undefined on the first run through of the code
//However, FUNCTION DECLARATIONS can be invoked prior to their declaration in code (declaration are hoisted along with their body)

/* {
    //console.log(myFunc(3,3));
    let myFunc = function (x, y){
        let total = 1;
        for(let i=0; i < y; i++){
            total *= x;
        }
        return total;
    }
    
    console.log(pow(3,3));
    function pow(x, y){
        let total = 1;
        for(let i=0; i < y; i++){
            total *= x;
        }
        return total;
    }
    
} */


// variable argument functions
{
    console.log(largest(30, 5, 3, 7));
    function largest(x, ...extra){
        console.log("this:", this);
        console.log("arguments:", arguments); // This method is not recommended for use unless you are working wth legacy code where extra was not available
        console.log("extra:", extra);
        let largest = x;
        for (i = 0; i < extra.length; i++){
            if(extra[i] > largest){
                largest = extra[i];
            }
        }
        return largest
    }
}