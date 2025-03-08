let showNotifButton = document.getElementById("shownotif");
let notificationContainer = document.getElementById("notification-container");

showNotifButton.addEventListener("click", function () {
    addnotif();
});

function addnotif() {

    //create notification element

    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `
        <span>You have a new message!</span>
        <span class="close-btn">&times;</span>`;

    // add event listener for close button
    notification.querySelector(".close-btn").addEventListener("click", function () {
        notification.remove();
    });

    // insert notification at the top
    notificationContainer.prepend(notification);

    // Auto-remove notification after 5 seconds
         
    setTimeout(() => {
        notification.remove();
    }, 5000);
};