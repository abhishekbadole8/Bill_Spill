// Generate btn work

let outDiscount;
let outPrice;
let discount;
var numOfPeople = 1

function myFunction() {
    document.querySelector(".btn-midnum").innerHTML = numOfPeople
    document.getElementById("price-tag1").innerHTML = discount / numOfPeople;
    document.getElementById("price-tag2").innerHTML = outPrice;
}

function func1(i, j) {
    var btn = document.querySelector(`#tip${j}`)
    for (let n = 1; n <= 6; n++) {
        if (n === j) {
            btn.style.backgroundColor = "hsl(263, 43%, 21%)";
        } else {
            var btn1 = document.querySelector(`#tip${n}`)
            btn1.style.backgroundColor = "#9C60FF";
        }
    }
    var y = document.getElementById("first-input").value
    let newNum = Number(y);
    discount = (i / newNum) * 100;
    console.log(numOfPeople);
    outDiscount = discount;
    outPrice = (newNum + discount);
}

function addOne() {
    numOfPeople++
    document.querySelector(".btn-midnum").innerHTML = numOfPeople;
}

function subOne() {
    if (numOfPeople <= 0) {
        return 0
    }
    numOfPeople--
    document.querySelector(".btn-midnum").innerHTML = numOfPeople
}
