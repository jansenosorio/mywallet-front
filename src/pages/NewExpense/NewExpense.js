import Container from "../../components/Container";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledTitle from "../../components/StyledTitle";
import MainContainer from "../../components/MainContainer";
import { useContext, useState } from "react";
import PageContext from "../../constants/PageContext";
import { REACT_APP_API_URL } from "../../services/urlConfig.js";
import axios from "axios";
import { useNavigate } from "react-router";

const NewExpense = () => {
  const { userToken } = useContext(PageContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: userToken.email,
    value: "",
    description: "",
    type: "Expense",
  });
  const navigate = useNavigate()

  const Auth = {
    headers:{

        'Authorization': `Bearer ${userToken.token}`
    }
  }

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const promise = axios.post(`${REACT_APP_API_URL}/entry`, form, Auth );
    promise
      .then((res) => {
        alert(res.data);
        setIsLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        alert(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <MainContainer>
      <Container>
        <StyledTitle>Nova saída</StyledTitle>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            name="value"
            type="number"
            required
            value={form.value}
            placeholder="Valor"
            onChange={handleForm}
            data-test="registry-amount-input"
          />
          <StyledInput
            name="description"
            type="text"
            required
            value={form.description}
            placeholder="Descrição"
            onChange={handleForm}
            data-test="registry-name-input"
          />
          <StyledButton
            type="submit"
            disabled={isLoading}
            data-test="registry-save"
          >
            Salvar saída
          </StyledButton>
        </StyledForm>
      </Container>
    </MainContainer>
  );
};

export default NewExpense;
