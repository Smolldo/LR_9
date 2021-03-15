alert("Гоник Михайло Іванович Варіант 1-25")


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
    
    if(N < 0){
        document.querySelector('.res').innerHTML = "Tne 'N' is less than 0.";
    }
    else{ 

    let r = 2*N, h, V, p = Math.PI;
    h =  Number(N) + 4;
    console.log(N, r, h, p);

    V = p * r * 2 * h;

    if(V >= 0){
        document.querySelector('.res').innerHTML = Math.round(V) +
        document.querySelector('.cmetrs3').innerHTML ;
    }
    else{
        document.querySelector('.res').innerHTML = "Wrong action";
    }

}
}

document.querySelector('.btn_three').onclick = myFunc;

function myFunc(){
    let r = document.querySelector('.third_input').value;
    let h = document.querySelector('.fourth_input').value;
    if(r < 0 || h < 0){
        document.querySelector('.res1').innerHTML = "The 'r' or 'h' are less than 0.";
    }
    else{
    let p = Math.PI, S;

    S = 2 * p * Number(r) * (Number(r + h));

    if(S >= 0){
        document.querySelector('.res1').innerHTML = Math.round(S) +
        document.querySelector('.cmetrs2').innerHTML;
    }
    else{
        document.querySelector('.res1').innerHTML = "Wrong action";
    }
    }
}

document.querySelector('.btn_four').onclick = allMost;

function allMost(){
    let N = document.querySelector('.fifth_input').value;

    let r = Number(N) - 6, l, S, p = Math.PI;

    if(N < 0){
        document.querySelector('.resultat', '.resultat1').innerHTML = "The 'N' is less than 0."
    }
    else{
    l = 2 * p * r;

    S = p * Math.pow(r , 2);

    if(l >= 0){
    document.querySelector('.resultat').innerHTML = Math.round(l) +
    document.querySelector('.cmetrs').innerHTML;
    }
    else{
    document.querySelector('.resultat').innerHTML = "Wrong Action";
    }

    if (S >= 0) {
        document.querySelector('.resultat1').innerHTML = Math.round(S) +
        document.querySelector('.cmetrs2').innerHTML;
    } else {
        document.querySelector('.resultat1').innerHTML = "Wrong Action";
    }
}
}

document.querySelector('.btn_five').onclick = tasks;

function tasks(){
    let N = document.querySelector('.sixth_input').value;

    let a = 4 * Number(N) -13, b = 2 * Number(N) - 6;
    let sum, min, mult, divide, pover, module;

    sum = a + b;
    min = a - b;
    mult = a * b;
    divide = a / b;
    pover = Math.pow(a, b);
    module = a % b;

    document.querySelector('.plus').innerHTML = Math.round(sum);
document.querySelector('.minus').innerHTML = Math.round(min);
document.querySelector('.multiply').innerHTML = Math.round(mult);
document.querySelector('.divide').innerHTML = Math.round(divide);
document.querySelector('.pow').innerHTML = Math.round(pover);
document.querySelector('.module').innerHTML = Math.round(module);
}
