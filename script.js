//asking for user input
let nameOfOperation = prompt("Name of operation i.e (addition, subtraction etc)").toUpperCase();
let firstOperator = prompt("Enter first number");
let operand = prompt("Enter the operand");
let secondOperator = prompt("Enter second number");

//linking to html 
let heading = document.getElementById('a').textContent = `${nameOfOperation}`
let num1 = document.getElementById('first-operand').textContent = `${firstOperator}`
let sign = document.getElementById('operator').textContent = `${operand}`
let num2 = document.getElementById('second-operand').textContent = `${secondOperator}`
let result = document.getElementById('result')
calculate()

//the function doing its magic
function calculate(){
    function add(firstOperator, secondOperator){
        if (operand === '+'){
        result.textContent = parseInt(firstOperator) + parseInt(secondOperator)
        console.log(result)
        }
        else{
            alert("Incorrect sign for addition")
        }
    }
    add(firstOperator, secondOperator);
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
