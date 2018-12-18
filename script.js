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

        let poke1_title = document.querySelector('#poke-1-title');
        poke1_title.innerHTML = 'Alakazam';

        let alakazam = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let poke1_gif = document.querySelector('#poke-1-gif');
        poke1_gif.src = 'http://www.pokestadium.com/sprites/xy/alakazam-3.gif';

        let poke1_info = document.querySelector('#poke-1-info');

        let hp = document.createElement('p');
        hp.innerHTML = `Hp: ${ alakazam.hp }`;
        poke1_info.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ alakazam.attack }`;
        poke1_info.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ alakazam.defense }`;
        poke1_info.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(alakazam.abilities.length)
        for(let i = 0; i < alakazam.abilities.length; i++) {
            abilityArray[i] = ' ' + alakazam.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke1_info.appendChild(abilityStats);
    });

// Squirtle Object
axios.get('https://pokeapi.co/api/v2/pokemon/squirtle/')
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;

        let poke2_title = document.querySelector('#poke-2-title');
        poke2_title.innerHTML = 'Squirtle';

        let squirtle = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);
        
        let poke2_gif = document.querySelector('#poke-2-gif');
        poke2_gif.src = 'http://www.pokestadium.com/sprites/xy/squirtle-2.gif';

        let poke2_info = document.querySelector('#poke-2-info');

        let hp = document.createElement('p');
        hp.innerHTML = `Hp: ${ squirtle.hp }`;
        poke2_info.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ squirtle.attack }`;
        poke2_info.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ squirtle.defense }`;
        poke2_info.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(squirtle.abilities.length)
        for(let i = 0; i < squirtle.abilities.length; i++) {
            abilityArray[i] = ' ' + squirtle.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke2_info.appendChild(abilityStats);
    });

// Xatu Object
axios.get('https://pokeapi.co/api/v2/pokemon/xatu/')
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;

        let poke3_title = document.querySelector('#poke-3-title');
        poke3_title.innerHTML = 'Xatu';

        let xatu = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let poke3_gif = document.querySelector('#poke-3-gif');
        poke3_gif.src = 'http://www.pokestadium.com/sprites/xy/xatu-3.gif';

        let poke3_info = document.querySelector('#poke-3-info');

        let hp = document.createElement('p');
        hp.innerHTML = `hp: ${ xatu.hp }`;
        poke3_info.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ xatu.attack }`;
        poke3_info.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ xatu.defense }`;
        poke3_info.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(xatu.abilities.length)
        for(let i = 0; i < xatu.abilities.length; i++) {
            abilityArray[i] = ' ' + xatu.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke3_info.appendChild(abilityStats);
    });
