
// 4 different ways the implicit parameter this acts differently
/* {
    
    let me = {
        name : "Jamie",
        outputMe: outputMe
    };
    
    function outputMe() {
        console.log(this);
    }

    function outputMeStrict(){
        'use strict';
        console.log(this);
    }

    function Person(){
        console.log(this);
    }

    me.outputMe();
    outputMe();
    outputMeStrict();
    let person = new Person();

} */

// call: allows us to alter this
{
    function doStuff(input){
        console.log(input);
        console.log(this);
    }
    doStuff();
    doStuff.call();
}