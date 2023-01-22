import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import StyledTitle from '../../components/StyledTitle'
import Dashboard from '../../components/Dashboard/Dashboard'
import BtnIncome from '../../components/BtnIncome'
import BtnExpenses from '../../components/BtnExpenses'
import BtnContainer from '../../components/BtnContainer'

import { IoExitOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import PageContext from '../../constants/PageContext'



const HomePage = () => {
    const { userToken, setUserToken } = useContext(PageContext)
    const navigate = useNavigate()

    const handleClick = () => {
        setUserToken("")
        navigate("/")
    }

    

    return (
        <MainContainer>
            <Container>
                <StyledTitle>
                    <div>
                    Olá, <span data-test="user-name">{userToken.name} </span>
                    </div>
                    <Link to="/">
                     <IoExitOutline onClick={() => handleClick()} data-test="logout"/>
                    </Link>
                </StyledTitle>
                <Dashboard/>
                <BtnContainer>
                    <BtnIncome data-test="new-income"/>
                    <BtnExpenses data-test="new-expense"/>
                </BtnContainer>
            </Container>
        </MainContainer>
    )
}

export default HomePage

