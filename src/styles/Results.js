import styled from "styled-components";

export const Pilot = styled.img`
    width: 180px;
    height: auto;
`
export const TitleResult = styled.h4`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
`
export const TextRes = styled.p`
    font-size: 14px;
`
export const PosButtn = styled.button`
    margin: 10px 10px 0 0; 
    padding: 10px 30px;
    border: none; 
    border-radius: 7px;
    color: white;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 15px;
    background-color: #5A93A7;}
    cursor: pointer;
    &:hover{
        background-color: #4ad9be;
		transition: 0.2s;
    }
`
export const NegButtn = styled.button`
    padding: 10px 30px;
    border: 1px solid #5A93A7; 
    border-radius: 7px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
`