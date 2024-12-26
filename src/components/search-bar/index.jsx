import { useContext, useRef } from 'react'
import PokemonContext from "../../contexts/pokemon-context"
import { ThemeContext } from '../../contexts/theme-context';
import { getPokemon } from '../../services/requestApi';
import { Input, InputSection } from './css';
import { Button } from '@mui/material';
import  SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {

    const { setPokemons, setNotFound, setInputValue, setIsInputValueLoading } = useContext(PokemonContext);
    const { theme } = useContext(ThemeContext);
    const inputRef = useRef();

    const handleInputSubmit = async () => {
        const inputValue = inputRef.current.value.toLowerCase();
        if (inputValue === '') return;
        setIsInputValueLoading(true);
    
        try {
            const data = await getPokemon(inputValue);
    
            if (data) {
                const pokemonName = data.name;
                setInputValue(pokemonName);
                setPokemons(data);
                setNotFound(false)
                setIsInputValueLoading(false);
                inputRef.current.value = '';
            }
        } catch (error) {
            console.log(error.message)
            setNotFound(true);
            setIsInputValueLoading(false);
            inputRef.current.value = '';
        }
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            handleInputSubmit();
        }
    };

    return (
        <InputSection>
            <Input
                theme={theme}
                type="text"
                placeholder="Search a Pokemon"
                ref={inputRef}
                onKeyUp={handleKeyUp}
            />

            <Button variant="contained" color="primary" onClick={handleInputSubmit}>
                <SearchIcon />
            </Button>
        </InputSection>
    );
};