let submit = document.querySelector('button');

submit.addEventListener('click', (event) => {
    event.preventDefault();

    let main = document.querySelector('main');
    let inputs = document.querySelectorAll('input');
    let name = inputs[0].value;
    let color = inputs[1].value;
    let fruit = inputs[2].value;

    let avatarBox = document.createElement('div');
    avatarBox.style.cssFloat = 'left';
    avatarBox.style.width = '150px';
    avatarBox.style.marginLeft = '100px';
    avatarBox.style.textAlign = 'center';
    main.appendChild(avatarBox);

    let trainerName = document.createElement('h4');
    trainerName.innerHTML = `${ name } ${ color }-${ fruit }`;
    trainerName.style.textTransform = 'capitalize';
    avatarBox.appendChild(trainerName);

    let avatarIcon = document.createElement('img');
    avatarIcon.src = 'images/pokeball.png';
    avatarIcon.style.width = '150px';
    avatarBox.appendChild(avatarIcon);

    let pokemonBox = document.createElement('div');
    pokemonBox.style.cssFloat = 'right';
    pokemonBox.style.margin = '25px 50px';
    pokemonBox.style.width = '700px';
    main.appendChild(pokemonBox);

    let pokemonTitle = document.createElement('h5');
    pokemonTitle.innerHTML = 'here are your pokemon!<br><em><strong>go forth and train</strong></em>';
    pokemonTitle.style.textTransform = 'capitalize';
    pokemonTitle.style.textAlign = 'center';
    pokemonBox.appendChild(pokemonTitle);

    let pokeContainer = document.createElement('div');
    pokeContainer.style.width = '25%';
    pokeContainer.classList.add('poke-icon');
    pokemonBox.appendChild(pokeContainer);

    let alakazamLink = document.createElement('a');
    alakazamLink.href = 'alakazam.html';
    alakazamLink.style.textDecoration = 'none';
    alakazamLink.style.color = 'black';
    pokeContainer.appendChild(alakazamLink);

    let alakazam = document.createElement('img');
    alakazam.src = 'images/065-alakazam@2x.png';
    alakazam.style.marginBottom = '10px';
    alakazamLink.appendChild(alakazam);

    let alakazamName = document.createElement('p');
    alakazamName.innerHTML = 'Alakazam';
    alakazamName.style.color = '#EDE6F2';
    alakazamLink.appendChild(alakazamName);

    let pokeContainer_2 = document.createElement('div');
    pokeContainer_2.style.width = '25%';
    pokeContainer_2.classList.add('poke-icon');
    pokemonBox.appendChild(pokeContainer_2);

    let squirtleLink = document.createElement('a');
    squirtleLink.href = 'squirtle.html';
    squirtleLink.style.textDecoration = 'none';
    squirtleLink.style.color = 'black';
    pokeContainer_2.appendChild(squirtleLink);

    let squirtle = document.createElement('img');
    squirtle.src = 'images/007-squirtle@2x.png';
    squirtle.style.marginBottom = '10px';
    squirtleLink.appendChild(squirtle);

    let squirtleName = document.createElement('p');
    squirtleName.innerHTML = 'Squirtle';
    squirtleName.style.color = '#EDE6F2';
    squirtleLink.appendChild(squirtleName);

    let pokeContainer_3 = document.createElement('div');
    pokeContainer_3.style.width = '25%';
    pokeContainer_3.classList.add('poke-icon');
    pokemonBox.appendChild(pokeContainer_3);

    let xatuLink = document.createElement('a');
    xatuLink.href = 'xatu.html';
    xatuLink.style.textDecoration = 'none';
    xatuLink.style.color = 'black';
    pokeContainer_3.appendChild(xatuLink);

    let xatu = document.createElement('img');
    xatu.src = 'images/178-xatu@2x.png';
    xatu.style.marginBottom = '10px';
    xatuLink.appendChild(xatu);

    let xatuName = document.createElement('p');
    xatuName.innerHTML = 'Xatu';
    xatuName.style.color = '#EDE6F2';
    xatuLink.appendChild(xatuName);

    let pokeIcon = document.querySelectorAll('.poke-icon');
    for(let i = 0; i < pokeIcon.length; i++) {
        pokeIcon[i].style.display = 'inline-block';
        pokeIcon[i].style.textAlign = 'center';
        pokeIcon[i].style.margin = '15px 28px';
    }

});
