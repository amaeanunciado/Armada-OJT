// Task 1: Calculate Total Cost
let item1 = 20;
let item2 = 15;
let item3 = 10;

let totalCost = item1 + item2 + item3;

console.log("The total cost of the items is: $" + totalCost);

// Task 2: Calculate Average
let num1 = 10;
let num2 = 7;
let num3 = 5;

let average = (num1 + num2 + num3) / 3;

console.log("The average is: " + average.toFixed(2));

//Task3

let number=12;

if(number%2==0){
    console.log(number+" is an even number ");
} else { 
    console.log(number+ " is an odd number");

}

//Task 4

let price=100;
let discount=20;

let price_amount=(price*discount)/100;

console.log("The discounted price is: $"+ (price- price_amount));

//Bonus

let final_price=80;
let discount_percentage=20;

let originalprice = final_price/(1-discount_percentage/100);

console.log("The original price before the discount was: $"+originalprice);

