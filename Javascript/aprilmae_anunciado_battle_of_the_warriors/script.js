let warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

let warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 10,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

// Simulate 10 rounds of battle

for (let round = 1; round <= 10; round++) {
    console.log(`\n=== Round ${round} ===`);
    
    /* Thor attacks Zeus, and Zeus' HP is reduced, 
       if Zeus' HP reaches 0, the battle ends.*/
    
    let damage = warrior1.attack();
    warrior2.hp -= damage;
    if (warrior2.hp < 0) warrior2.hp = 0;
    console.log(`${warrior1.name} attacks ${warrior2.name} and does ${damage} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);
    
    if (warrior2.hp === 0) break; 
    
    /* Zeus attacks Thor, and Thor's HP is reduced, 
       if Thor's HP reaches 0, the battle ends.  */

    damage = warrior2.attack();
    warrior1.hp -= damage;
    if (warrior1.hp < 0) warrior1.hp = 0;
    console.log(`${warrior2.name} attacks ${warrior1.name} and does ${damage} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);
    
    if (warrior1.hp === 0) break;
}

//Determine and display the winner based on remaining HP

if (warrior1.hp > warrior2.hp) {
    console.log(` ${warrior1.name} WINS the battle! `);
} else if (warrior2.hp > warrior1.hp) {
    console.log(` ${warrior2.name} WINS the battle! `);
} else {
    console.log(" It's a DRAW! ");
}