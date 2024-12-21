import { useState, useEffect, useContext } from "react"
import { getPokemonTypes } from "../../services/requestApi"
import PokemonContext from "../../contexts/pokemon-context"
import { ThemeContext } from "../../contexts/theme-context"
import { colorsScheme } from "../../assets/colorsScheme";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectType = () => {
  const { setPokemonValue, setBeginIndex, setEndIndex, setNotFound } = useContext(PokemonContext)

  const { theme } = useContext(ThemeContext)

  const [types, setTypes] = useState([])

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      const response = await getPokemonTypes()
      setTypes(response.results)
    }
    fetchPokemonTypes()
  }, [])

  async function handleSelectTypeChange(event) {
    setPokemonValue(event.target.value);
    setBeginIndex(0);
    setEndIndex(10);
    setNotFound(false);
  }


  return (
    <Box>

      <FormControl
        sx={{
          m: 1,
          minWidth: 140,
          background: theme.cardBackground,
          color: theme.textColor,
          textTransform: 'capitalize',
          borderRadius: '10px',
        }}

        variant="filled">
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{
            color: theme.textColor
          }}
        >
          Select Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Type"
          onChange={handleSelectTypeChange}
          sx={{
            color: theme.textColor
          }}
        >
          {types.map((type) => (
            <MenuItem
              key={type.name}
              value={type.name}
              sx={{
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: colorsScheme[type.name],
                  color: 'white',
                  fontWeight: 'bold',
                  transition: '0.2s',
                }
              }}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}