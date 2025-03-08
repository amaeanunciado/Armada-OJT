let box = document.getElementById("box");
let button = document.getElementById("button");

function toggleBox() {
    let currentState = box.getAttribute("data-state");

    if (currentState === "closed") {
        box.setAttribute("src", "img/open-box.png"); 
        box.setAttribute("data-state", "open");
        button.textContent = "Close";

        setTimeout(() => {
            box.setAttribute("src", "img/closed-box.png");
            box.setAttribute("data-state", "closed");
            button.textContent = "Click Me";
        }, 3000);

    } else {
        box.setAttribute("src", "img/closed-box.png"); 
        box.setAttribute("data-state", "closed");
        button.textContent = "Click Me";
    }
}

// Click event for both box and button

box.addEventListener("click", toggleBox);
button.addEventListener("click", toggleBox);
