const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://img.pokemondb.net/sprites/home/normal/bulbasaur.png" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById('pokemonsList');

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonBody) {
        console.log(jsonBody);
        return jsonBody.results; // ⚠️ PASSA OS POKÉMONS PARA O PRÓXIMO .then()
    })
    .then(function(pokemons) { // ✅ AGORA O NOME FAZ SENTIDO
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            console.log(convertPokemonToHtml(pokemon)); // ✅ NOME CORRETO
            pokemonList.innerHTML += convertPokemonToHtml(pokemon); // ✅ NOME CORRETO
        }
    })
    .catch(function(error) {
        console.error(error);
    })
    .finally(function() {
        console.log('Requisição concluída!');
    });
