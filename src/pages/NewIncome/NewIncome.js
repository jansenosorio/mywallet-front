import Container from "../../components/Container"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledTitle from "../../components/StyledTitle"
import MainContainer from "../../components/MainContainer"

const NewIncome = () => {
    return (
        <MainContainer>
            <Container>
                <StyledTitle>Nova entrada</StyledTitle>
                <StyledForm>
                    <StyledInput placeholder="Valor" data-test="registry-amount-input"/>
                    <StyledInput placeholder="Descrição" data-test="registry-name-input"/>
                </StyledForm>
                <StyledButton data-test="registry-save">Salvar entrada</StyledButton>
            </Container>
        </MainContainer>
    )
}

export default NewIncome

