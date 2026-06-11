// Variables in JavaScript
var a = 8;
let name = "John";
let salary = 250000.25
let isActive = true;
const c = 30;
function clickme(){
            // if(a<10){
            //     a= a+20
            //     document.getElementById("demo").innerText ="Value of a is: " + a ;
                 
            // }
            // else if(a>10){
            //     a= 500
            //     document.getElementById("demo").innerText ="Value of a is: " + a ;
            // }
            // else{
            //     document.getElementById("demo").innerText ="Value of a is: " + a ;
            // }
           // Ternary operator Example
            let data = (c<20)?"c is greater than 20" : "c is less than 20";
            // switch case example
            switch (a) {
                case 8:
                    data += " and a is 8";
                    break;
                case 28:
                    data += " and a is 28";
                    break;
                default:
                    data += " and a is neither 8 nor 28";
            }
        
        document.getElementById("demo").innerText ="Value of a is: " + a ;
        document.getElementById("demo").innerHTML += "<h2>Value of name is: " + name + "</h2>";
        document.getElementById("demo").innerHTML += "<h2>" + data + "</h2>"; 
        }