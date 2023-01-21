import { LogoComponent } from "../../components/LogoComponent";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import Container from "../../components/Container";
import { useState } from "react";
import {REACT_APP_API_URL} from '../../services/urlConfig'
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const promise = axios.post(`${REACT_APP_API_URL}/sign-up`, form);
    promise
      .then((res) => {
        alert(res.data);
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data);
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <LogoComponent />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          type="text"
          required
          placeholder="Nome"
          onChange={handleForm}
          data-test="name"
          value={form.name}
        />
        <StyledInput
          name="email"
          type="email"
          required
          placeholder="E-mail"
          onChange={handleForm}
          data-test="email"
          value={form.email}
        />
        <StyledInput
          name="password"
          type="password"
          required
          placeholder="Senha"
          onChange={handleForm}
          data-test="password"
          value={form.password}
        />
        <StyledInput
          name="confirmPassword"
          type="password"
          required
          placeholder="Confirme a senha"
          onChange={handleForm}
          data-test="conf-password"
          value={form.confirmPassword}
        />
        <StyledButton
          type="submit"
          disabled={isLoading}
          data-test="sign-up-submit"
        >
          Cadastrar
        </StyledButton>
      </StyledForm>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
};

export default SignUp;
