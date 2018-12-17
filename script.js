class Pokemon {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

axios.get('https://pokeapi.co/api/v2/pokemon/alakazam/')
    .then((response) => {
        let data = response.data;
        let stat = data.stats;
        let abilities = data.abilities;

        let poke1_title = document.querySelector('#poke-1-title');
        poke1_title.innerHTML = 'Alakazam';

        let alakazam = new Pokemon(stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

        let poke1_gif = document.querySelector('#poke-1-gif');
        


    });