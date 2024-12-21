import axios from 'axios'

async function getPokemons(limit, offset) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const pokemons = await response.data.results
    return pokemons
}

async function getPokemon(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return response.data
}

async function getPokemonAbilities(abilities) {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${abilities}/`)
    if (response) {
        return response.data.effect_entries.find(entry => entry.language.name === 'en').effect
    }
}

async function getPokemonTypes() {
    const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=18`)
    return response.data
}

async function filterPokemonsType(type, beginIndex, endIndex) {
    if(type === "") {
        return
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    const pokemonsName = response.data.pokemon.map(pokemon => pokemon.pokemon.name)
    return pokemonsName.slice(beginIndex, endIndex)
}

export { getPokemons, getPokemon, getPokemonAbilities, getPokemonTypes, filterPokemonsType }