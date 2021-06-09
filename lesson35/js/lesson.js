// Build pyramid
{
    var div = document.getElementById("destination");
    var br = document.createElement('br');

    for (let i = 0; i < 10; i++){
        if (i % 2 == 0) div.appendChild(br);
        div.append(i);
    }
}