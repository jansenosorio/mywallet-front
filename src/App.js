import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import SignUp from './pages/SignUp/SignUp'
import NewEntry from './pages/NewEntry/NewEntry'
import NewExits from './pages/NewExits/NewExits'
import HomePage from './pages/HomePage/HomePage'


const App = () => {

  return (
  <MainContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Login/>)} />
        <Route path="/cadastro" element={(<SignUp/>)} />
        <Route path="/home" element={(<HomePage/>)} />
        <Route path="/nova-entrada" element={(<NewEntry/>)} />
        <Route path="/nova-saida" element={(<NewExits/>)} />
      </Routes>
    </BrowserRouter>
  </MainContainer>
  )
}

export default App

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #8C11BE;
`


