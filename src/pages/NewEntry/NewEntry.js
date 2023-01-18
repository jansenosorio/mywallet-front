import Container from "../../components/Container"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledTitle from "../../components/StyledTitle"

const NewEntry = () => {
    return (
        <Container>
            <StyledTitle>Nova entrada</StyledTitle>
            <StyledForm>
                <StyledInput placeholder="Valor" data-test="registry-amount-input"/>
                <StyledInput placeholder="Descrição" data-test="registry-name-input"/>
            </StyledForm>
            <StyledButton>Salvar entrada</StyledButton>
        </Container>
    )
}

export default NewEntry
