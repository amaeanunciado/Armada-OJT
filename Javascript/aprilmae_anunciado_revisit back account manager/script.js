let balance = 4000; 
let dailywithrawn=0;
let dailyLimit =500;

let amountInput = document.getElementById("enterAmount");
let balanceDisplay = document.getElementById("balance");
let notification = document.getElementById("notification");
let transactionhistory =document.getElementById("transactionHistory");

// Deposit
document.getElementById("depositButton").addEventListener("click", function () {
    let amount = +amountInput.value; 
    
    if (!amount || amount <= 0) { 
        showMessage("Invalid deposit amount!");
        return;
    }
    balance += amount; 
    updateBalance();
    showMessage(`Successfully deposited $${amount}.`);
    addTransaction ("Deposit",amount);
});

// Withdraw

document.getElementById("withrawButton").addEventListener("click", function(){
    let amount = +amountInput.value;

    if (!amount || amount <=0){
        showMessage("Invalid withraw amount!");
        return;
    }
    if (amount > balance){
        showMessage ("Insufficient funds!");
        return;
    }
    if ((dailywithrawn + amount) > dailyLimit){
        showMessage ("Daily withrawal limit reached! ($500).");
        return;
    }
    balance -= amount;
    dailywithrawn += amount;
    updateBalance();
    showMessage (`Successfully withraw $${amount}.`)
    addTransaction ("Withraw", amount);
})

// Function to update the balance

function updateBalance() {
    balanceDisplay.innerText = balance; 
    amountInput.value = ""; // Clear input after transaction
}

// display success/error messages

function showMessage(text, type) {

    notification.innerText = text;
    notification.classList.remove("success", "error");
    notification.classList.add(type === "success" ? "success" : "error");
    
    //Auto hide after 3 seconds

    setTimeout(() => {
        notification.innerText = "";
    }, 3000);
}

function addTransaction (type, amount){
    let listItem =document.createElement("li");
    listItem.innerText = `${type}: $${amount}`;
    transactionhistory.prepend (listItem);
}


