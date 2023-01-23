import Container from "../../components/Container";
import MainContainer from "../../components/MainContainer";
import StyledTitle from "../../components/StyledTitle";
import Dashboard from "../../components/Dashboard/Dashboard";
import BtnIncome from "../../components/BtnIncome";
import BtnExpenses from "../../components/BtnExpenses";
import BtnContainer from "../../components/BtnContainer";
import axios from "axios";

import { IoExitOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import PageContext from "../../constants/PageContext";
import { REACT_APP_API_URL } from "../../services/urlConfig";

const HomePage = () => {
  const { userToken, setUserToken, setUserResume } = useContext(PageContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setUserToken("");
    setUserResume(null)
    navigate("/");
  };

  useEffect(() => {
    const Auth = {
      headers: {
        Authorization: `Bearer ${userToken.token}`,
      },
    };

    const promise = axios.get(`${REACT_APP_API_URL}/entry`, Auth);

    promise
      .then((res) => {
        const data = res.data
        const newData = data.filter(elm => elm.idUser === userToken.email)
        setUserResume(newData)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <MainContainer>
      <Container>
        <StyledTitle>
          <div>
            Olá, <span data-test="user-name">{userToken.name} </span>
          </div>
          <Link to="/">
            <IoExitOutline onClick={() => handleClick()} data-test="logout" />
          </Link>
        </StyledTitle>
        <Dashboard />
        <BtnContainer>
          <BtnIncome data-test="new-income" />
          <BtnExpenses data-test="new-expense" />
        </BtnContainer>
      </Container>
    </MainContainer>
  );
};

export default HomePage;
