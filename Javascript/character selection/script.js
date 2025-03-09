const characters = document.querySelectorAll(".character");
const mainCharacter = document.getElementById("maincharacter");
const characterName = document.getElementById("charactername");

// Function to update selected character
function selectCharacter() {

    // Remove highlight from previous selection
    characters.forEach(char => char.classList.remove("selected"));

    // Update main display
    mainCharacter.src = this.getAttribute("data-full-img");
    characterName.textContent = this.getAttribute("data-name");

    // Highlight the selected character
    this.classList.add("selected");
}

// Attach click event to each character
characters.forEach(character => character.addEventListener("click", selectCharacter));
