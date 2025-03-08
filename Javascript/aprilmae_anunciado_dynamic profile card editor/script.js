function updatename() {
    let nameInput = document.getElementById("name").value;
    if (nameInput.trim() !== "") {
        document.querySelector("header h2").innerText = nameInput;
    }
}
document.querySelector("button[onclick='updatename()']").addEventListener("click", function(event) {
    event.preventDefault();
    updatename();
});

function updatebio() {
    let bioInput = document.getElementById("bio").value;
    if (bioInput.trim() !== "") {
        document.querySelector("header p").innerText = bioInput;
    }
}

document.querySelector("button[onclick='updatebio()']").addEventListener("click", function(event) {
    event.preventDefault();
    updatebio();
});

function updateimg() {
    let imageUrl = document.getElementById("image").value;
    if (imageUrl.trim() !== "") {
        document.querySelector("header img").setAttribute("src", imageUrl);
    }
}

document.querySelector("button[onclick='updateimg()']").addEventListener("click", function(event) {
    event.preventDefault();
    updateimg();
});

function updatebg() {
    let selectedColor = document.getElementById("bgcolor").value;
    document.querySelector("header").style.backgroundColor = selectedColor;
}
document.querySelector("button[onclick='updatebg()']").addEventListener("click", function(event) {
    event.preventDefault();
    updatebg();
});
