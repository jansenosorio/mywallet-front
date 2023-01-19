import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlinePlusCircle } from "react-icons/ai"


const BtnIncome = () => {

    return (
        <ButtonIn to="/nova-entrada">
            <AiOutlinePlusCircle size={('22px')}/>
            Nova entrada
        </ButtonIn>
    )

}

export default BtnIncome


const ButtonIn = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 155px;
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

    padding: 10px 50px 10px 10px;
` 