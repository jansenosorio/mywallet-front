import Dash from "./style";
import styled from "styled-components";
import { useContext } from "react";
import PageContext from "../../constants/PageContext";

const Dashboard = () => {
  const { userResume } = useContext(PageContext);

  const totalArr = [];

  userResume?.forEach((elm) => {
    if (elm.type === "Expense") {
      totalArr.push(Number(elm.value) * -1);
    } else {
      totalArr.push(Number(elm.value));
    }
  });

  let total = 0;

  totalArr.map((elm) => (total += elm));

  let length = userResume.length;

  total = total.toFixed(2)

  console.log(length);

  return (
    <Dash > 
      <ContainerLine length={length}>
        {length > 0 ? (
          userResume.map((elm) => (
            <ContainerDashFilled key={elm._id}>
              <Box1>
                <h3>{elm.date}</h3>
                <h3 data-test="registry-name">{elm.description}</h3>
              </Box1>
              <Box2 type={elm.type}>
                <h3 data-test="registry-amount">{`R$ ${elm.value}`}</h3>
              </Box2>
            </ContainerDashFilled>
          ))
        ) : (
          <h1>Não há registros de entrada ou saída</h1>
        )}
      </ContainerLine>

      <ContainerTotal total={total} length={length}>
        <div>
          <h1>SALDO:</h1>
        </div>
        <p data-test="total-amount">{total}</p>
      </ContainerTotal>
    </Dash>
  );
};

export default Dashboard;

/* <h1>Não há registros de entrada ou saída</h1> */

const ContainerDashFilled = styled.div`
  display: flex;
  width: 344px;
  height: auto;
  justify-content: space-between;

  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const Box1 = styled.div`
  width: auto;
  height: auto;
  display: flex;

  h3 {
    :nth-child(1) {
      color: #c6c6c6;
    }

    margin-right: 15px;
    text-transform: capitalize;
  }
`;

const Box2 = styled.div`
  width: auto;
  height: auto;
  color: ${(props) => (props.type === "Expense" ? "red" : "green")};
`;

const ContainerTotal = styled.div`
  width: 344px;
  display: ${props => props.length > 0 ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;

  font-family: Raleway;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  margin-top: 15px;

  h1 {
    font-weight: 700;
    color: black;
  }

  p {
    color: ${(props) => (props.total < 0 ? "red" : "green")};
  }
`;

const ContainerLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: ${props => props.length < 1 ? '50px' : '0px'};
  display: ${props => props.length < 1 ? 'flex' : ''};
  align-items: center;
`;
