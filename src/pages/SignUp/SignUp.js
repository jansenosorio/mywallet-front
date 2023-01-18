import { LogoComponent } from "../../components/LogoComponent"
import StyledInput from "../../components/StyledInput"
import StyledLink from "../../components/StyledLink"
import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import Container from '../../components/Container'

const SignUp = () => {
  return (
    <Container>
      <LogoComponent/>
      <StyledForm>
        <StyledInput placeholder="Nome" />
        <StyledInput placeholder="E-mail" />
        <StyledInput placeholder="Senha" />
        <StyledInput placeholder="Confirme a senha" />
      </StyledForm>
      <StyledButton type="submit" data-test="sign-in-submit">Cadastrar</StyledButton>
      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>
    </Container>
  )
}

export default SignUp