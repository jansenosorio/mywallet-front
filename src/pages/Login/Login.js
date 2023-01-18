import { LogoComponent } from "../../components/LogoComponent"
import styled from "styled-components"
import StyledInput from "../../components/StyledInput"
import StyledLink from "../../components/StyledLink"
import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"

const Login = () => {
  return (
    <Container>
      <LogoComponent/>
      <StyledForm>
        <StyledInput placeholder="E-mail"/>
        <StyledInput placeholder="Senha"/>
      </StyledForm>
      <StyledButton type="submit">Entrar</StyledButton>
      <StyledLink to="/cadastro">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  )
}

export default Login


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`