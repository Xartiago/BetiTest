import styled from "styled-components";
import { Green} from "./Colors";

export const ModalCont1 = styled.div`
    position: absolute;
    border-radius: 20px;
    top: 45%;
    left: 30%;
    width: 40%;
    height: 70%;
    background: linear-gradient(180deg, rgba(0,224,255,1) 50%, rgba(0,255,141,1) 100%);
`
export const RelModCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextMod1 = styled.h5`
  margin: 20px auto 10px; 
  width: 70%;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #fff;
`
export const SpanMod = styled.span`
  color: #fff;
  margin: 0 auto 20px;
  font-size: 16px;
  font-weight: 500;
`
export const ModButt1 = styled.button`
  padding: 10px 30px;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-family: Montserrat;
  border-radius: 7px;
`
export const Radioinput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`
export const InputTles = styled.p`
  margin: 17px 0 10px;
  font-weight: 600;
  color: #000;
  font-size: 14.5px;
`
export const FormCnt = styled.div`
  padding: 30px 15px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media(min-width: 900px){
    grid-column-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 1400px){
    grid-column-gap: 30px;
    grid-row-gap: 35px;
    grid-template-columns: repeat(3, 1fr);
  }  
`
export const RadioInp = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row
`
export const CentFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const SubmitBttn = styled.button`
  background-color: ${Green};
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  &:hover{
		background-color: #4ad9be;
		transition: 0.5s;
	}
`
export const Errors = styled.p` 
  font-size: 12px;
  padding: 0 18px 7px;
  color: #c63637;
`