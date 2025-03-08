//Exercise 1

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function subtract (a,b){
    return a-b;
}

function divide(a,b){
    return a / b;
}

console.log(calculate(10, 3, subtract));      
console.log(calculate(5, 2, divide));

//Exercise 2

function delayedMessage(message, delay, firstcallback,callback) {
    firstcallback();

    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, 
    function(){console.log("First Delay");},
    function(msg) {console.log(msg);}
);

//Exercise 3

function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i)===false){
            break;
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if(index ===3)return false;
});




