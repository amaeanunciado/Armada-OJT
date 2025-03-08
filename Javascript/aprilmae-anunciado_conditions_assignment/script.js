//Task 1

let score = 55;
let grade;

if (score>=90 && score<=100){
    grade="Grade A";
} else if (score>=80 && score<=89){
    grade="Grade B";
} else if (score>=70 && score<=79){
    grade="Grade C";
} else if (score>=60 && score<=69){
    grade="Grade D";
} else {
    grade="Grade F";
}
console.log(grade);

//Task 2

let temperature=-5;

if (temperature<0){
    console.log ("It's freezing outside! Bundle up!");
} else if (temperature>=0 && temperature<=15){
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature>=16 && temperature<=30){
    console.log( "The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

//Task 3

let age=18;

if (age<13){
    console.log("You are too young for this activity.");
} else if(age>=13 && age<=17){
    console.log("You need parental permission.");
}  else if(age>=18){
    console.log("You are eligible for this activity.");
}

//Task 4

let _age=14;
let isMember= false;

if (_age<12){
    console.log("The ticket is free.");
} else if(_age>=12 && isMember){
    console.log("The ticket costs is $10.");
}  else {
    console.log("The ticket costs $15.");
}

//Task 5


function isLeapYear(year){

    if (year % 4 ===0 && year % 100 !==0 || year % 400 ===0){
        return true;
    } else{
        return false;
    }
}
console.log(isLeapYear (2000));


