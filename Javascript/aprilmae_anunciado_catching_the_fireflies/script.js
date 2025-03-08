// Select all fireflies
let fireflies = document.querySelectorAll(".firefly");

// Attach event listener to each firefly
fireflies.forEach(firefly => {
    firefly.addEventListener("click", function() {
        this.style.transform = "scale(0.1)"; 
        this.style.opacity="0";

        setTimeout(() => {
            this.style.transform = "scale(1)";
            this.style.opacity = "1"; // Fade in
        }, 1000);
    });
});