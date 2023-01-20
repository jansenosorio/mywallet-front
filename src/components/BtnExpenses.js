import styled from "styled-components"
import { CgRemove } from "react-icons/cg"
import { Link } from "react-router-dom"


const BtnExpenses = () => {

    return (
        <ButtonOut to="/nova-saida">
            <CgRemove size={('22px')}/>
            Nova saída
        </ButtonOut>
    )

}

export default BtnExpenses


const ButtonOut = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 173px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;

    border: none;

    margin-top: 15px;

    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    color: white;


    box-sizing: border-box;
    text-decoration: none;

    padding: 10px 75px 10px 10px;
` 