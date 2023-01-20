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
        <StyledInput placeholder="Nome" type="name" data-test="name"/>
        <StyledInput placeholder="E-mail" type="email" data-test="email"/>
        <StyledInput placeholder="Senha" type="password" data-test="password"/>
        <StyledInput placeholder="Confirme a senha" type="password" data-test="conf-password"/>
      </StyledForm>
      <StyledButton type="submit" data-test="sign-up-submit">Cadastrar</StyledButton>
      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>
    </Container>
  )
}

export default SignUp