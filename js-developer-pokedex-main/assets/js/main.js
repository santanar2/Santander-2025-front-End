const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

// CORRIGIDO: Variáveis da Modal CRUCIAIS.
const modalContainer = document.getElementById('modalContainer')
const closeModalButton = document.getElementById('closeModal')
const pokemonDetailDiv = document.getElementById('pokemonDetail')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" data-pokemon-id="${pokemon.number}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function renderPokemonDetails(pokemon) {
    // RECONSTRUÇÃO DA TABELA "ABOUT" (como na pop-up cart.JPG)
    const aboutTableHtml = `
        <table id="aboutTable" class="visible">
            <thead>
                <tr>
                    <th colspan="2">About</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Habitat</td><td>${pokemon.habitat}</td></tr>
                <tr><td>Height</td><td>${pokemon.height} m</td></tr>
                <tr><td>Weight</td><td>${pokemon.weight} kg</td></tr>
                <tr><td>Abilities</td><td>${pokemon.abilities.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(', ')}</td></tr>
                <tr><th colspan="2" class="section-title">Breeding</th></tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <span class="gender-male">♂ ${pokemon.genderMale}</span> 
                        <span class="gender-female">♀ ${pokemon.genderFemale}</span>
                    </td>
                </tr>
                <tr><td>Egg Groups</td><td>${pokemon.eggGroups.map(group => group.charAt(0).toUpperCase() + group.slice(1)).join(', ')}</td></tr>
                <tr><td>Egg Cycle</td><td>${pokemon.hatchSteps} Steps</td></tr>
            </tbody>
        </table>
    `;
    
    // TABELA BASE STATS
    const baseStatsHtml = `
        <table id="baseStatsTable">
            <thead>
                <tr><th colspan="3">Base Stats</th></tr>
            </thead>
            <tbody>
                ${pokemon.baseStats.map(stat => `
                    <tr>
                        <td>${stat.name.replace('special-attack', 'Sp. Atk').replace('special-defense', 'Sp. Def').replace('hp', 'HP')}</td>
                        <td>${stat.value}</td>
                        <td><progress value="${stat.value}" max="200"></progress></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `
    
    // HTML FINAL DA MODAL
    return `
        <div class="pokeSpecie ${pokemon.type}">
            <div class="pokemon">
                <div class="identification">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.number}</span>
                </div>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <div class="pokeContainer">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </div>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#" class="active" data-tab="aboutTable">About</a></li>
                    <li><a href="#" data-tab="baseStatsTable">Base Stats</a></li>
                </ul>
            </div>
            ${aboutTableHtml}
            ${baseStatsHtml}
        </div>
    `
}

function openModal(pokemonId) {
    pokeApi.getPokemonById(pokemonId).then(pokemon => {
        pokemonDetailDiv.innerHTML = renderPokemonDetails(pokemon)
        modalContainer.classList.add('active')
        setupModalTabs()
    })
}

function closeModal() {
    modalContainer.classList.remove('active')
    pokemonDetailDiv.innerHTML = ''
}

function setupModalTabs() {
    const tabs = document.querySelectorAll('.menu a')
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault()
            const targetTabId = e.target.dataset.tab

            tabs.forEach(t => t.classList.remove('active'))
            document.querySelectorAll('#aboutTable, #baseStatsTable').forEach(t => t.classList.remove('visible'))

            e.target.classList.add('active')
            document.getElementById(targetTabId).classList.add('visible')
        })
    })
}

// CORRIGIDO: Adiciona feedback de clique e abre a modal
pokemonList.addEventListener('click', (e) => {
    const li = e.target.closest('.pokemon')
    if (li) {
        const pokemonId = li.dataset.pokemonId
        li.classList.add('clicked'); // Adiciona feedback visual
        setTimeout(() => {
            openModal(pokemonId);
            li.classList.remove('clicked'); // Remove feedback
        }, 150); 
    }
})

closeModalButton.addEventListener('click', closeModal)
modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
        closeModal()
    }
})


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
