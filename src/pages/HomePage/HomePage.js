import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import StyledTitle from '../../components/StyledTitle'
import Dashboard from '../../components/Dashboard/Dashboard'
import BtnIncome from '../../components/BtnIncome'
import BtnExpenses from '../../components/BtnExpenses'
import BtnContainer from '../../components/BtnContainer'

import { IoExitOutline } from 'react-icons/io5'



const HomePage = () => {
    return (
        <MainContainer>
            <Container>
                <StyledTitle>
                    <div>
                    Olá, <span data-test="user-name">Fulano </span>
                    </div>
                    <IoExitOutline data-test="logout"/>
                </StyledTitle>
                <Dashboard/>
                <BtnContainer>
                    <BtnIncome/>
                    <BtnExpenses/>
                </BtnContainer>
            </Container>
        </MainContainer>
    )
}

export default HomePage

