import { useState, useEffect, createContext } from 'react'

import { getPokemons, getPokemon, filterPokemonsType } from '../services/requestApi';

const PokemonContext = createContext({});

export function PokemonProvider({ children }) {

  const paginationLimit = 10;

  const [pokemons, setPokemons] = useState([]);
  const [paginationOffset, setPaginationOffset] = useState(0);
  const [pokemonValue, setPokemonValue] = useState('');
  const [beginIndex, setBeginIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [isCardListLoading, setIsCardListLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isInputValueLoading, setIsInputValueLoading] = useState(false);
  const [isPokemonTypeLoading, setIsPokemonTypeLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addPokemons = () => {
    if (pokemonValue === "") {
      if (endIndex > pokemons.length) {
        return
      }
      setPaginationOffset(paginationOffset + paginationLimit);
    } else if (pokemonValue !== "") {
      if (endIndex > pokemons.length) {
        return
      }
      setBeginIndex(beginIndex + paginationLimit);
      setEndIndex(endIndex + paginationLimit);
    }
  };

  useEffect(() => {
    const fetchData = async () => {

      if (pokemonValue === "") {
        setIsCardListLoading(true)
        const data = await getPokemons(paginationLimit, paginationOffset);
        const pokemonNames = data.map(pokemon => pokemon.name);
        const pokemonPromises = pokemonNames.map(async (pokemonName) => await getPokemon(pokemonName));
        const paginatedPokemons = await Promise.all(pokemonPromises);

        setIsCardListLoading(false)
        setPokemons([...pokemons, ...paginatedPokemons]);
      }

    };

    fetchData();
  }, [paginationOffset]);

  useEffect(() => {
    const fetchData = async () => {

      if (pokemonValue) {
        setIsCardListLoading(true)
        setIsPokemonTypeLoading(true)
        const filteredPokemonsNames = await filterPokemonsType(pokemonValue, beginIndex, endIndex);
        const filteredPokemonName = filteredPokemonsNames.map(async (pokemonName) => await getPokemon(pokemonName));
        const filteredPokemons = await Promise.all(filteredPokemonName);

        setIsCardListLoading(false)
        setIsPokemonTypeLoading(false)
        setPokemons(filteredPokemons);
      }
    };

    fetchData();
  }, [pokemonValue]);

  useEffect(() => {
    const fetchMorePokemons = async () => {

      if (beginIndex >= 10 && endIndex >= 20) {
        setIsCardListLoading(true)
        const filteredPokemonsNames = await filterPokemonsType(pokemonValue, beginIndex, endIndex)
        const filteredPokemonName = filteredPokemonsNames.map(async (pokemonName) => await getPokemon(pokemonName))
        const filteredPokemons = await Promise.all(filteredPokemonName)

        setIsCardListLoading(false)
        setPokemons([...pokemons, ...filteredPokemons])
      }

    }
    fetchMorePokemons()
  }, [beginIndex, endIndex])

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, addPokemons, pokemonValue, setPokemonValue, beginIndex, setBeginIndex, endIndex, setEndIndex, setPaginationOffset, paginationOffset, isCardListLoading, setIsCardListLoading, setNotFound, notFound, inputValue, setInputValue, setIsInputValueLoading, isInputValueLoading, isPokemonTypeLoading }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext
