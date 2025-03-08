// Function to update the name in the header

function updatename() {
    let nameInput = document.getElementById("name").value;
    if (nameInput.trim() !== "") {
        document.querySelector("header h2").innerText = nameInput; //update header name
    }
}
// Function to update the bio in the header

function updatebio() {
    let bioInput = document.getElementById("bio").value;
    if (bioInput.trim() !== "") {
        document.querySelector("header p").innerText = bioInput;
    }
}
// Function to update the profile image in the header

function updateimg() {
    let imageUrl = document.getElementById("image").value;
    if (imageUrl.trim() !== "") {
        document.querySelector("header img").setAttribute("src", imageUrl);
    }
}
// Function to update the background color of the header

function updatebg() {
    let selectedColor = document.getElementById("bgcolor").value;
    document.querySelector("header").style.backgroundColor = selectedColor;
}

// Add event listener for the update button

document.getElementById("nameButton").addEventListener("click", function(event) {
    event.preventDefault();
    updatename();
})

document.getElementById("bioButton").addEventListener("click", function(event){
    event.preventDefault();
    updatebio();
});

document.getElementById("imgButton").addEventListener("click", function(event){
    event.preventDefault();
    updateimg();
})

document.getElementById("bgbutton").addEventListener("click", function(event){
    event.preventDefault();
    updatebg();
})

