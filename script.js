
let nameOfOperation = prompt("Name of operation i.e (addition, subtraction etc)").toUpperCase();
let firstOperator = prompt("Enter first number");
let operand = prompt("Enter the operand");
let secondOperator = prompt("Enter second number");

let heading = document.getElementById('a').textContent = `${nameOfOperation}`
let num1 = document.getElementById('first-operand').textContent = `${firstOperator}`
let sign = document.getElementById('operator').textContent = `${operand}`
let num2 = document.getElementById('second-operand').textContent = `${secondOperator}`

function calculate(){
    let result = document.getElementById('result').textContent 
    function add(){
        if (operand === '+'){
        let ans = parseInt(firstOperator) + parseInt(secondOperator)

        }
        else{
            alert("Incorrect sign for addition")
        }
    }
    add();
    /*function multiply(){
        //
    }
    multiply();
    function subtract()
    }
    subtract();
    function divide(){
        //
    }
    function divide(){

    }*/
}