import styled from "styled-components";
import { Gray, Main } from "../styles/Colors";

export const NameDayCont = styled.div`
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc; 
    display: flex;
    justify-content: center;
`
export const Name = styled.p`
    color: ${Main};
    font-size: 10px;
    font-weight: 500;
    margin: 4px 0;
    @media(min-width: 650px){
        font-size: 13px;
    }
    @media(min-width: 900px){
        font-size: 15px
    }
    @media(min-width: 1400px){
        font-size: 17px
    }
`
export const NumDayCont = styled.div`
    background-color: ${(props) => props.dom % 7 === 0 ? '#eee' : ''};
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc; 
    padding: 10px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Numb = styled.div`
    display: flex;
    font-weight: 700;
    font-size: 15px;
    justify-content: flex-end;
`
export const Tasks = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
`