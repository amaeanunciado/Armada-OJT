let balance = 4000; // Initial balance

let amountInput = document.getElementById("enterAmount");
let balanceDisplay = document.getElementById("balance");
let notification = document.getElementById("notification");

// Deposit
document.getElementById("depositButton").addEventListener("click", function () {
    let amount = +amountInput.value; 
    
    if (!amount || amount <= 0) { // Checks if amount is invalid
        showMessage("Invalid deposit amount!");
        return;
    }
    balance += amount; // Update balance
    updateBalance();
    showMessage(`Successfully deposited $${amount}.`);
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
    balance -= amount;
    updateBalance();
    showMessage (`Successfully withraw $${amount}.`)
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
