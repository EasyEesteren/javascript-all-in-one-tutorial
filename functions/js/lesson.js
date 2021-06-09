{
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
}