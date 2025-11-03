const pokeApi = {}

function convertGenderRateToPercentage(genderRate) {
    if (genderRate === -1) { return { male: 'Genderless', female: '' }; }
    const femalePercentage = (genderRate / 8) * 100;
    const malePercentage = 100 - femalePercentage;
    // Retorna percentuais ou a string 'Genderless'
    return {
        male: malePercentage === 100 ? '100%' : `${malePercentage.toFixed(1)}%`,
        female: femalePercentage === 100 ? '100%' : `${femalePercentage.toFixed(1)}%`
    };
}

function convertPokeApiDetailToPokemon(pokeDetail, pokeSpeciesDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default || pokeDetail.sprites.front_default

    // Detalhes de 'pokemon'
    pokemon.height = (pokeDetail.height / 10).toFixed(2)
    pokemon.weight = (pokeDetail.weight / 10).toFixed(1)
    pokemon.abilities = pokeDetail.abilities.filter(a => !a.is_hidden).map((abilitySlot) => abilitySlot.ability.name)
    pokemon.baseStats = pokeDetail.stats.map((statSlot) => ({
        name: statSlot.stat.name,
        value: statSlot.base_stat
    }))

    // Detalhes de 'pokemon-species' (NOVOS)
    if (pokeSpeciesDetail) {
        pokemon.habitat = pokeSpeciesDetail.habitat ? (pokeSpeciesDetail.habitat.name.charAt(0).toUpperCase() + pokeSpeciesDetail.habitat.name.slice(1)) : 'Unknown';
        
        const gender = convertGenderRateToPercentage(pokeSpeciesDetail.gender_rate);
        pokemon.genderMale = gender.male;
        pokemon.genderFemale = gender.female;

        pokemon.eggGroups = pokeSpeciesDetail.egg_groups.map(group => group.name);
        pokemon.hatchSteps = pokeSpeciesDetail.hatch_counter * 256;
    }

    return pokemon
}

pokeApi.getPokemonSpeciesDetail = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    return fetch(url).then(res => res.json());
}

// CORRIGIDO: Busca ambos os detalhes e só falha se houver erro grave
pokeApi.getPokemonById = (id) => {
    const detailUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    return Promise.all([
        fetch(detailUrl).then(res => res.json()),
        pokeApi.getPokemonSpeciesDetail(id) 
    ]).then(([pokeDetail, pokeSpeciesDetail]) => {
        return convertPokeApiDetailToPokemon(pokeDetail, pokeSpeciesDetail);
    });
}


// Funções de lista permanecem
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(res => convertPokeApiDetailToPokemon(res, null))
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
