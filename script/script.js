//alert("Гоник Михайло Іванович Варіант 3")


document.querySelector('.btn').onclick = myClick;

function myClick(){
    let a = document.querySelector('.first_input').value;

    let x = a, y, z;
    y = 2 * a + 1;
    z = a + 2;

    x += y - a++ * z;
    z = a++ + y * 5;
    y = y - a++ *z;
    console.log(x, y, z);


    document.querySelector('.ox').innerHTML = a;
    document.querySelector('.oz').innerHTML = z;
    document.querySelector('.oy').innerHTML = y;
}

document.querySelector('.btn_two').onclick = mathematica;

function mathematica(){
    let N = document.querySelector('.second_input').value;

    let r = 2*N, h, V, p = Math.PI;
    h =  Number(N) + 4;
    console.log(N, r, h, p);

    V = p * r * 2 * h;

    document.querySelector('.res').innerHTML = Math.round(V);


}