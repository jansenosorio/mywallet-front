import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import SignUp from './pages/SignUp/SignUp'


const App = () => {

  return (
  <MainContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Login/>)} />
        <Route path="/cadastro" element={(<SignUp/>)} />
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


