class Pokemon {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

// Alakazam Object
axios.get('https://pokeapi.co/api/v2/pokemon/alakazam/')
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;
        let poke_one = document.querySelector('#poke_one');

        let alakazam = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let hp = document.createElement('p');
        hp.innerHTML = `Hp: ${ alakazam.hp }`;
        poke_one.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ alakazam.attack }`;
        poke_one.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ alakazam.defense }`;
        poke_one.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(alakazam.abilities.length)
        for(let i = 0; i < alakazam.abilities.length; i++) {
            abilityArray[i] = ' ' + alakazam.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke_one.appendChild(abilityStats);
    });

// Squirtle Object
axios.get('https://pokeapi.co/api/v2/pokemon/squirtle/')
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;
        let poke_two = document.querySelector('#poke_two');

        let squirtle = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let hp = document.createElement('p');
        hp.innerHTML = `hp: ${ squirtle.hp }`;
        poke_two.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ squirtle.attack }`;
        poke_two.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ squirtle.defense }`;
        poke_two.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(squirtle.abilities.length)
        for(let i = 0; i < squirtle.abilities.length; i++) {
            abilityArray[i] = ' ' + squirtle.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke_two.appendChild(abilityStats);
    });

// Xatu Object
axios.get('https://pokeapi.co/api/v2/pokemon/xatu/')
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;
        let poke_three = document.querySelector('#poke_three');

        let xatu = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let hp = document.createElement('p');
        hp.innerHTML = `hp: ${ xatu.hp }`;
        poke_three.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ xatu.attack }`;
        poke_three.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ xatu.defense }`;
        poke_three.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(xatu.abilities.length)
        for(let i = 0; i < xatu.abilities.length; i++) {
            abilityArray[i] = ' ' + xatu.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke_three.appendChild(abilityStats);
    });