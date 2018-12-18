class Pokemon {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

// Bryan's Pokemon
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
        hp.innerHTML = `Hp: ${ xatu.hp }`;
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

// Mohamed Pokemon
// Braviary
axios.get("http://fizal.me/pokeapi/api/v2/name/braviary.json")
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;

        let poke4_title = document.querySelector('#poke-4-title');
        poke4_title.innerHTML = 'Braviary';

        let braviary = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let poke4_gif = document.querySelector('#poke-4-gif');
        poke4_gif.src = 'http://www.pokestadium.com/sprites/xy/braviary.gif';

        let poke4_info = document.querySelector('#poke-4-info');

        let hp = document.createElement('p');
        hp.innerHTML = `Hp: ${ braviary.hp }`;
        poke4_info.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ braviary.attack }`;
        poke4_info.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ braviary.defense }`;
        poke4_info.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(braviary.abilities.length)
        for(let i = 0; i < braviary.abilities.length; i++) {
            abilityArray[i] = ' ' + braviary.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke4_info.appendChild(abilityStats);
    });

// Castform
axios.get("http://fizal.me/pokeapi/api/v2/name/castform.json")
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;

        let poke5_title = document.querySelector('#poke-5-title');
        poke5_title.innerHTML = 'Castform';

        let castform = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let poke5_gif = document.querySelector('#poke-5-gif');
        poke5_gif.src = 'http://www.pokestadium.com/sprites/xy/castform.gif';

        let poke5_info = document.querySelector('#poke-5-info');

        let hp = document.createElement('p');
        hp.innerHTML = `Hp: ${ castform.hp }`;
        poke5_info.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ castform.attack }`;
        poke5_info.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ castform.defense }`;
        poke5_info.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(castform.abilities.length)
        for(let i = 0; i < castform.abilities.length; i++) {
            abilityArray[i] = ' ' + castform.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke5_info.appendChild(abilityStats);
    });

// Charizard
axios.get("http://fizal.me/pokeapi/api/v2/name/charizard.json")
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;

        let poke6_title = document.querySelector('#poke-6-title');
        poke6_title.innerHTML = 'Charizard';

        let charizard = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let poke6_gif = document.querySelector('#poke-6-gif');
        poke6_gif.src = 'http://www.pokestadium.com/sprites/xy/charizard-3.gif';

        let poke6_info = document.querySelector('#poke-6-info');

        let hp = document.createElement('p');
        hp.innerHTML = `Hp: ${ charizard.hp }`;
        poke6_info.appendChild(hp);

        let attack = document.createElement('p');
        attack.innerHTML = `Attack: ${ charizard.attack }`;
        poke6_info.appendChild(attack);

        let defense = document.createElement('p');
        defense.innerHTML = `Defense: ${ charizard.defense }`;
        poke6_info.appendChild(defense);

        let abilityStats = document.createElement('p');
        let abilityArray = Array(charizard.abilities.length)
        for(let i = 0; i < charizard.abilities.length; i++) {
            abilityArray[i] = ' ' + charizard.abilities[i].ability.name;
        }
        abilityStats.innerHTML = `Abilities: ${ abilityArray }`;
        abilityStats.style.textTransform = 'capitalize';
        poke6_info.appendChild(abilityStats);
    });