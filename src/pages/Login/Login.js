import { LogoComponent } from "../../components/LogoComponent";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import Container from "../../components/Container";
import { REACT_APP_API_URL } from "../../services/urlConfig";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const promise = axios.post(`${REACT_APP_API_URL}/login`, form);
    promise
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        alert(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <LogoComponent />
      <StyledForm onSubmit={hadleSubmit}>
        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          required
          onChange={handleForm}
          data-test="email"
          value={form.email}
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          type="password"
          required
          onChange={handleForm}
          data-test="password"
          value={form.password}
        />
        <StyledButton
          type="submit"
          data-test="sign-in-submit"
          disabled={isLoading}
        >
          Entrar
        </StyledButton>
      </StyledForm>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
};

export default Login;
