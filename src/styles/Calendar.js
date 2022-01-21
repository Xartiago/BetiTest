import styled from "styled-components";
import { Green, Main } from "./Colors";

export const FlexCalCont = styled.div`
    display: flex;
    padding: 20px 30px;
    flex-direction: column;
    @media(min-width: 900px){
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
    }
`
export const NavCont = styled.div`
    background: white;
    margin-bottom: 30px;
    padding-bottom: 30px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 14px;
    @media(min-width: 900px){
        width: 20%;
    }
`
export const BrandCont = styled.img`
    margin: 10px auto 15px;
    width: 130px;
    height: auto;
`
export const CalTle = styled.h3`
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
	font-weight: 700;
	font-size: 18px;
	color: #000;
`
export const ActiveCeil = styled.div`
    padding: 10px 0;
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(102, 184, 169, 0.4)
`
export const Ceil = styled.div`
    padding: 10px 0;
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const SpanContr = styled.span`
    margin-left: 10px;
    font-weight: 700;
`
export const CalendarCont = styled.div`
    @media(min-width: 900px){
        width: 78%;
    }
`
export const CalContr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 130px;
    justify-content: space-around;
    @media(min-width: 900px){
        height: auto;
        margin: 20px 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`
export const BttnRecord = styled.button`
    background-color: ${Green};
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    border: none;
    padding: 10px 40px;
    font-family: Montserrat;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
`
export const Select2 = styled.select`
    width: 20%;
    margin-top: 3px;
    height: 40px;
    border: none;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    color: ${Main};
`
export const Month = styled.span`
    margin: 0 10px;
    font-size: 18px;
    font-weight: 700;
`
export const AlignCent = styled.div`
    display: flex; 
    align-items: center;
    flex-direction: row;
`
export const Divs = styled.div`
    height: 10px;
    background-color: blue;
`
export const ScheduleCont = styled.div`
    margin: 20px 0; 
    display: grid;
    grid-column-gap: 1px;
    grid-template-columns: repeat(7, 1fr);
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    @media(min-width: 900px){
        padding: 20px;
    }
`