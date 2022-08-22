import React from "react";
import ResumoItens from "../ResumoItens";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
 } from "react-icons/fa";

const Resumo = ({ income, expense, total}) => {
    return(
        <C.Container>
            <ResumoItens title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumoItens title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} /> 
            <ResumoItens title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    )
   
}

export default Resumo;