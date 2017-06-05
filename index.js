// This is a comment

/*

    This is a multiline comment
    
*/

var myVariable = 3;

document.querySelector("#name").textContent = "Yi-Hsuan Lee";

console.log(document.querySelector);

var password = window.prompt("Please Enter Password to see the Website", "password");

var password = '1234'

if (password === '1234') {
    alert("WELCOME !!!!! <3 <3");
} else {
    alert("FAIL");
}


var portfolio = [
    "I am MA Digital Curation student at King's",
    "I can do a bit of coding.",
    "I find it pretty fun."   
                ]

var x = 0;

while (x <= 10) {
    if (x === 5) {
        break;
    }
    console.log(x);
    x++;
}

var list = document.getElementById("portfoliolist");

for (var i = 0; i < portfolio.length; i++) {
    console.log(portfolio[i]);      
    var listitem = document.createElement("li");
    listitem.textContent = portfolio[i];
    list.appendChild(listitem);
}

for (var i in portfolio) {
    console.log(portfolio[i]);
    console.log(multiply(i, i));
}

function multiply(num1, num2) {
    
    var temporary = num1 * num2;
    return temporary - 1;
}

var num = 5;

var x = multiply(num, 3);

console.log(x);

document.querySelector('html').onclick = function() {
    alert("Hah you clicked my website!!!!!!!!");
}


document.getElementById("contactform").onsubmit = function() {
    console.log(document.getElementById("emailinput").value);
    console.log(document.getElementById("textinput").value);
}






