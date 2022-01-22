import styled from "styled-components";
import { Gray, Green } from "./Colors";

export const Cont = styled.div`
    position: absolute;
    top: 20%;
    left: 30%;
    height: 75%;
    width: 45%;
    background-color: #ded;
    border-radius: 13px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`
export const Close = styled.div`
    position: absolute;
    padding: 15px;
    top: 0;
    cursor: pointer;
    right: 0;
`
export const FormCal = styled.form`
    padding: 20px 30px;;
`
export const GridFormCont = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
`
export const BttnContCal = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`
export const BttnSubCal = styled.button`
    background-color: ${Green};
    border: none;
    color: #fff;
    padding: 10px 30px;
    font-family: Montserrat;
    font-weight: 600;
    border-radius: 12px;
`
export const EditCont = styled.div`
  position: absolute;
  border-radius: 20px;
  width: 30%;
  top: 28%;
  left: 43%;
  background-color: ${Gray};    
`
export const Pag = styled.p`
    padding: 5px 30px;
`