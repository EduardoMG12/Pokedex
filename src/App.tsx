import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import About from './pages/About'
import GlobalStyle from './style/globalStyle'

function App() {
  return (

    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
