document.getElementById("container").addEventListener("click", function() {
    alert("You clicked the container!");
    this.style.backgroundColor = "lightgray"; 
});

document.querySelectorAll(".color-box").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents bubbling up to the container
        document.getElementById("container").style.backgroundColor = this.style.backgroundColor;
        alert("You clicked the " + this.textContent + " button!");
    });
});

/* event.stopPropagation(); is useful because it ensures that when a user clicks a button 
   to change the background color, only the button's event runs, and the container’s 
   event does not trigger unexpectedly. Without it, clicking a button would also 
   activate the container’s event, resetting the background color and showing an 
   unnecessary alert. */