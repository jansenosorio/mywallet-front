import { LogoComponent } from "../../components/LogoComponent"
import StyledInput from "../../components/StyledInput"
import StyledLink from "../../components/StyledLink"
import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import Container from '../../components/Container'

const Login = () => {
  return (
    <Container>
      <LogoComponent/>
      <StyledForm>
        <StyledInput placeholder="E-mail" data-test="email"/>
        <StyledInput placeholder="Senha" data-test="password"/>
      </StyledForm>
      <StyledButton type="submit" data-test="sign-in-submit">Entrar</StyledButton>
      <StyledLink to="/cadastro">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  )
}

export default Login


