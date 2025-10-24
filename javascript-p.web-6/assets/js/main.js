const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;

// main.js

function convertPokemonToLi(pokemon) {
    // Nova estrutura para o design: o nome e o número agora estão no topo, 
    // e o bloco de tipos e a imagem estão na parte inferior do card.
    return `
        <li class="pokemon ${pokemon.type}">
            <div class="card-header">
                <span class="name">${pokemon.name}</span>
                <span class="number">#${String(pokemon.number).padStart(3, '0')}</span>
            </div>
            <div class="card-detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}"> 
            </div>
        </li>
    `;
}

// ... o restante do seu main.js continua o mesmo


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;
    });
}

// Carregamento inicial
loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});
