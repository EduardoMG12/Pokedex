import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import GlobalStyle from './style/globalStyle'
import Card from './pages/Card'
import { PokemonProvider } from './hooks/usePokemons'
import { ThemeProvider } from 'styled-components'
import light from './style/themes/light'

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={
            <PokemonProvider>
              <Main />
            </PokemonProvider>
          }>
            <Route index element={<Home />} />
            <Route path='card/:id' element={<Card />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App;