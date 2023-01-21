

// tip percent color
// function myFun (button) {
//     var x = button.id;
//     switch (x) {
//         case '1':
//             myFun1(x);
//             break;
//         case '2':
//             myFunction2(x);
//             break;
//         case '3':
//             myFunction3(x);
//             break;
//         default:
//             return false;
//     }
// }

var btn = document.querySelector('#tip1')
btn.addEventListener('click', function onclick() {
    btn.style.backgroundColor = "#6138a4";
})
var btn = document.querySelector('#tip2')
btn.addEventListener('click', function onclick() {
    btn.style.backgroundColor = "#6138a4";
})
var btn = document.querySelector('#tip3')
btn.addEventListener('click', function onclick() {
    btn.style.backgroundColor = "#6138a4";
})
var btn = document.querySelector('#tip4')
btn.addEventListener('click', function onclick() {
    btn.style.backgroundColor = "#6138a4";
})
var btn = document.querySelector('#tip5')
btn.addEventListener('click', function onclick() {
    btn.style.backgroundColor = "#6138a4";
})



// Generate btn work
function myFunction() {

    var y = document.getElementById("first-input").value
    document.getElementById("price-tag1").innerHTML = (5 / y) * 100
    console.log('y')
    var x = document.getElementById("first-input").value;
    document.getElementById("price-tag2").innerHTML = x+y;
    console.log('x')
}




// Number of people btn
var i = 0
document.querySelector(".btn-midnum").innerHTML = i

function addOne() {
    i++
    document.querySelector(".btn-midnum").innerHTML = i;
}

function subOne() {
    if (i <= 0) {
        return 0
    }
    i--
    document.querySelector(".btn-midnum").innerHTML = i
}
