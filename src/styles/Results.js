import styled from "styled-components";

export const PaddFlexCont = styled.div`
    display:flex;
    flex-direction: column;
    @media(min-width: 650px){
        padding: 0 30px;
    }
    @media(min-width: 1100px){
        padding: 0 120px;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const End = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const InfoCont = styled.div`
    @media(min-width: 1100px){
        width: 45%;
        margin-right: 20px;
    }
`
export const RightPercent = styled.div`
    margin-top: 30px;
    @media(min-width: 1100px){
        width: 30%;
    }

`
export const Pilot = styled.img`
    width: 250px;
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
    background-color: #5A93A7;
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
    color: #5A93A7;
`