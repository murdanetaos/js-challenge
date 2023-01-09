var num1 = prompt("Please enter first number", "");
var operator = prompt("Please enter an operator(+,-,*,/)", "");
var num2 = prompt("Please enter second number", "");
var result = result(num1, operator, num2);
if(result == 'Invalid operator' || result == 'Invalid input'){
	console.log(result);
}else{
	var output = num1 + ' ' + operator + ' ' + num2 + ' = ' + result; 
	console.log(output);
}

function result(x, op, y) {
	if(op == '+') {
		return add(x, y);
	} else 	if(op == '-') {
		return subtract(x, y);
	} else 	if(op == '*') {
		return multiply(x, y);
	} else 	if(op == '/') {
		return divide(x, y);
	} else{
		return 'Invalid operator';
		}		
}	


function add(x, y){
	
	if(isNaN(x) || isNaN(y)){
		return "Invalid input";
	}
	
return parseInt(x) + parseInt(y);

}

function subtract(x, y){
	if(isNaN(x) || isNaN(y)){
		return "Invalid input";
	}
return x - y;

}

function multiply(x, y){
	if(isNaN(x) || isNaN(y)){
		return "Invalid input";
	}
return x * y;

}

function divide(x, y){
	if(isNaN(x) || isNaN(y)){
		return "Invalid input";
	}
return x / y;

}