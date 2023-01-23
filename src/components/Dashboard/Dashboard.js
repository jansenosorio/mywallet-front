import Dash from "./style";
import styled from "styled-components";
import { useContext } from "react";
import PageContext from "../../constants/PageContext";

const Dashboard = () => {
  const { userResume } = useContext(PageContext);

  return (
    <Dash>
      {!userResume === "" ? (
        userResume.map(elm => (
          <ContainerDashFilled key={elm.id}>
            <div>
              <h3>{elm.date}</h3>
              <h3>{elm.description}</h3>
            </div>
            <div>
              <h3>{`R$ ${elm.value}`}</h3>
            </div>
          </ContainerDashFilled>
        ))
      ) : (
        <h1>Não há registros de entrada ou saída</h1>
      )}
    </Dash>
  );
};

export default Dashboard;

/* <h1>Não há registros de entrada ou saída</h1> */

const ContainerDashFilled = styled.div`
  display: flex;
  width: 344px;
  height: auto;
`;
