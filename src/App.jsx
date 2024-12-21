
import './App.css'
import { AppRoutes } from './routes'
import { ThemeProvider } from './contexts/theme-context'
import { PokemonProvider } from './contexts/pokemon-context'

function App() {

  return (
    <PokemonProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </PokemonProvider>
  )
}
export default App