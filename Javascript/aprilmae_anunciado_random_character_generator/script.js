// Create a character Object
function character(name = "Hero") {
    this.name = name;
    this.health = 100;
    this.class = this.assignRandomClass();
    this.special_ability = this.assignSpecialAbility();
    this.randomizeHealth();
}

//Assign random class
character.prototype.assignRandomClass = function() {
    const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
    return classes[Math.floor(Math.random() * classes.length)];
};

//Randomize Health
character.prototype.randomizeHealth = function() {
    this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
};

// Assign special ability
character.prototype.assignSpecialAbility = function() {
    const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
    return abilities[Math.floor(Math.random() * abilities.length)];
};

//Generate character function
function generatecharacter(name) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    return new character(name || names[Math.floor(Math.random() * names.length)]);
}

//Battle Simulation
character.prototype.battle = function(othercharacter) {
    let damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    let initialHealth = othercharacter.health;
    othercharacter.health = Math.max(othercharacter.health - damage, 0);
    console.log(`character ${this.name} attacked character ${othercharacter.name} with ${this.specialAbility}. ${othercharacter.name}'s health dropped from ${initialHealth} to ${othercharacter.health}.`);
};

//Generate Multiple characters
function generateMultiplecharacters(x) {
    let characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generatecharacter());
    }
    return characters;
}

const character1 = generatecharacter("Zane");
const character2 = generatecharacter("Elara");
console.log(character1);
console.log(character2);
character1.battle(character2);

const party = generateMultiplecharacters(5);
console.dir(party);