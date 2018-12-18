let p = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let img1 = document.querySelector("#img1");
img1.src = "Castform.png";



axios.get("https://fizal.me/pokeapi/api/v2/name/castform.json")
.then(res1 =>{
    let data1 = res1.data;
    let castArray = [];
    for(let i=0; i<data1.abilities.length; i++){
        castArray.push(data1.abilities[i].ability.name);
    }
    let div1 = document.querySelector("#div1");
    
    p.innerHTML += `HP:  ${ data1.stats[5].base_stat}`;
    p2.innerHTML += `Attack : ${data1.stats[4].base_stat}`;
    p3.innerHTML += `Deffense : ${data1.stats[3].base_stat}`;
    p4.innerHTML += `Abilities : ${castArray}`;
    div1.appendChild(p);
    div1.appendChild(p2);
    div1.appendChild(p3);
    div1.appendChild(p4);
    
})
axios.get("https://fizal.me/pokeapi/api/v2/name/charizard.json")
.then(res2 =>{
    let data2 = res2.data;
    let charArray = [];
    for(let i=0; i<data2.abilities.length; i++){
        charArray.push(data2.abilities[i].ability.name);
    }
    let div2 = document.querySelector("#div2");
    let p = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
    p.innerHTML += `HP : ${data2.stats[5].base_stat}`;
    p2.innerHTML += `Attack : ${data2.stats[4].base_stat}`;
    p3.innerHTML += ` Deffense : ${data2.stats[3].base_stat}`;
    p4.innerHTML += `Abilities : ${charArray}`;
    div2.appendChild(p);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
})
axios.get("https://fizal.me/pokeapi/api/v2/name/braviary.json")
.then(res3 =>{
    let data3 = res3.data;
    braveArray = [];
    for(let i=0; i<data3.abilities.length; i++){
        braveArray.push(data3.abilities[i].ability.name);
    }
    let div3 = document.querySelector("#div3");
    let p = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
    p.innerHTML += `HP : ${data3.stats[5].base_stat}`;
    p2.innerHTML += `Attack : ${data3.stats[4].base_stat}`;
    p3.innerHTML += ` Deffense : ${data3.stats[3].base_stat}`;
    p4.innerHTML += `Abilities : ${braveArray}`;
    div3.appendChild(p);
    div3.appendChild(p2);
    div3.appendChild(p3);
    div3.appendChild(p4);
})