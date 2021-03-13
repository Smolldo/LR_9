//alert("Гоник Михайло Іванович Варіант 3")


document.querySelector('.btn').onclick = myClick;

function myClick(){
    let a = document.querySelector('.first_input').value;

    let x, y, z;
    x = a;
    y = 2 * a + 1;
    z = a + 2;

    x += y - a++ * z;
    console.log(x, y, z);

    document.querySelector('span').innerHTML = x;
}