class Calculator {
	constructor(number, operation, current, previous) {
		this.number = number;
		this.operation = operation;
		this.current = current;
		this.previous = previous;
	}
	
	clear() {
		this.current.innerHTML = "0";
		this.previous.innerHTML = "";
		this.operation = null;
	}
	
	del() {
		let d = this.current.innerHTML;
	    let y = d.toString().split('');
		y.pop();
		this.current.innerHTML = Number(y.join(''));
		
		if(this.current.innerHTML == "") {
			this.current.innerHTML = 0;
		}
		
		if(isNaN(this.current.innerHTML)) {
			this.current.innerHTML = "0";
		}
	}
	
	compute() {
		if(this.current.innerHTML.includes('..') || this.previous.innerHTML.includes('..')) {
			alert('two or more periods are not allowed.');
			this.current.innerHTML = "0";
		    this.previous.innerHTML = "";
		    this.operation = null;
			return false;
		} 
		
		else {
		
		switch(this.previous.innerHTML.toString().slice(-1)) {
				
			case '+':
				  let num = parseFloat(this.previous.innerHTML) + parseFloat(this.current.innerHTML)
				  this.current.innerHTML = num.toLocaleString();
				  this.previous.innerHTML = "";
			 break;
				
			case '-':
				  let num2 = parseFloat(this.previous.innerHTML) - parseFloat(this.current.innerHTML)
				  this.current.innerHTML = num2.toLocaleString();
				  this.previous.innerHTML = "";
			 break;
				
			case 'x':
				  let num3 = parseFloat(this.previous.innerHTML) * parseFloat(this.current.innerHTML)
				  this.current.innerHTML = num3.toLocaleString();
				  this.previous.innerHTML = "";
			 break;
				
			case '÷':
				  let num4 = parseFloat(this.previous.innerHTML) / parseFloat(this.current.innerHTML)
				  this.current.innerHTML = num4.toLocaleString();
				  this.previous.innerHTML = "";
			 break;		
		}
		
		}
	 }
		
	}


const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const del = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');
const currentOperand = document.querySelector('[data-current-operand]');
const previousOperand = document.querySelector('[data-previous-operand]');

const obj = new Calculator(numbers, operations, currentOperand, previousOperand);

allClear.addEventListener('click', function() {
	obj.clear();
})

del.addEventListener('click', function() {
	obj.del();
})

numbers.forEach(myFunction);

function myFunction(button) {
	button.addEventListener('click', function() {
		if(currentOperand.innerHTML === '0') {
			currentOperand.innerHTML = "";
		}
		currentOperand.innerHTML += button.innerHTML;
	})
}

operations.forEach(function(button) {
	button.addEventListener('click', function() {
		previousOperand.innerHTML = currentOperand.innerHTML + button.innerHTML;
		currentOperand.innerHTML = 0;
		})})
	


equals.addEventListener('click', function() {
	obj.compute();
})





