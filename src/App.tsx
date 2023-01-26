import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import GlobalStyle from './style/globalStyle'
import Card from './pages/Card'

function App() {
  return (

    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='card/:id' element={<Card />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
