// 1. Hallo 
function fn_say_itworks() {
    console.log('It works!!!');
    document.getElementById('pItworks').value = "It works";
}

//Arrow function

let arrow_fn_say_itworks = () => {
    console.log('It works!!!');
    document.getElementById('pItworks').value = "It works";
}

//Summe berechnen (x=2; y=3)
/* https://stackoverflow.com/questions/21397743/passing-html-input-value-as-a-javascript-function-parameter */

function fn_calculate_sum(x, y) {
    let sum = parseInt(x) + parseInt(y);
    console.log(x);
    console.log(y);
    console.log(x + '+' + y + '=' + sum)
    document.getElementById('result').value = x + '+' + y + '=' + sum;
    document.getElementById('output').value = x + '+' + y + '=' + sum;
}

// Arrow function 

let arrow_fn_calculate_sum = (x, y) => {
    let sum = parseInt(x) + parseInt(y);
    console.log(x);
    console.log(y);
    console.log(x + '+' + y + '=' + sum)
    document.getElementById('result').value = x + '+' + y + '=' + sum;
    document.getElementById('output').value = x + '+' + y + '=' + sum;
}


// Multiplcation result as Alert()

function fn_calculate_multiplication(x, y) {
    let r = parseInt(x) * parseInt(y);
    console.log(x);
    console.log(y);
    document.getElementById('mlp_result').value = x + 'x' + y + '=' + r;
    document.getElementById('mlp_output').value = x + 'x' + y + '=' + r;
    alert(x + 'x' + y + '=' + r);
}

// Arrow function

let arrow_fn_calculate_multiplication = (x, y) => {
    let r = parseInt(x) * parseInt(y);
    console.log(x);
    console.log(y);
    document.getElementById('mlp_result').value = x + 'x' + y + '=' + r;
    document.getElementById('mlp_output').value = x + 'x' + y + '=' + r;
    alert(x + 'x' + y + '=' + r);
}

// Funktion, die einen Parameter nimmt und den deses Elements anzeigt i=true; k=1; l={name:"John"}; a=[0,1]
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/typeof

function fn_show_datatype(x) {
    let datatype = typeof (x);
    console.log('The datatype of ' + x + ' is ' + datatype);

    document.getElementById('dtype_result').value = 'The datatype of ' + x + ' is ' + datatype;
    document.getElementById('dtype_output').value = 'The datatype of ' + x + ' is ' + datatype;

    // Test: i=true; j=”hi”; k=1; l={name:”John”}; a=[0,1]

    let i = true;
    let j = 'hi';
    let k = 1;
    let l = { name: 'John' };
    let a = [0, 1];

    console.log('The type of i=true is = ' + typeof (i));
    console.log('The type of j=”hi” is = ' + typeof (j));
    console.log('The type of k=1 is = ' + typeof (k));
    console.log('The type of l={name:"John"} is = ' + typeof (l));
    console.log('The type of let a=[0,1]; is = ' + typeof (a));

}

// Arrow function 

let arrow_fn_show_datatype = (x) => {
    let datatype = typeof (x);
    console.log('The datatype of ' + x + ' is ' + datatype);

    document.getElementById('dtype_result').value = 'The datatype of ' + x + ' is ' + datatype;
    document.getElementById('dtype_output').value = 'The datatype of ' + x + ' is ' + datatype;

    // Test: i=true; j=”hi”; k=1; l={name:”John”}; a=[0,1]

    let i = true;
    let j = 'hi';
    let k = 1;
    let l = { name: 'John' };
    let a = [0, 1];

    console.log('The type of i=true is = ' + typeof (i));
    console.log('The type of j=”hi” is = ' + typeof (j));
    console.log('The type of k=1 is = ' + typeof (k));
    console.log('The type of l={name:"John"} is = ' + typeof (l));
    console.log('The type of let a=[0,1]; is = ' + typeof (a));

}

// Reset 
function fn_reset() {
    window.open("index.html");
}

// Arrow function

let arrow_fn_reset = () => {
    window.open("index.html");
}
