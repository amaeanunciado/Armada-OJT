//Task 1
function customFilter(arr, callback) {
    let result=[];
    for (let i =0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    } return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  

//Task 2
function countdown(start, callback) {
    let interval=setInterval(function (){

        callback(start);
        if(start===0){
            clearInterval(interval);
        } start--;
    }, 1000);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);

//Task 3

function createButton(buttonText, callback) {
    let button= document.createElement("button");
    button.textContent=buttonText;
    button.addEventListener("click",callback);
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  

//Task 4
function runTasks(tasks) {
    let index=0;

    function seriesoftask() {
        if (index<tasks.length){
            tasks[index]();
            index++;
            setTimeout(() => {
                setTimeout(seriesoftask);
            }, 1000);
        }
        
    }
    seriesoftask();
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]); 

//Task 5

function askQuestion(question, choices, correctAnswer, callback) {
    let answer = prompt(question + "\n" + choices.join("\n"));
    callback(answer === correctAnswer); 
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);


