import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import StyledTitle from '../../components/StyledTitle'
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
            </Container>
        </MainContainer>
    )
}

export default HomePage