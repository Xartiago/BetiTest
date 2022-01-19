import styled from "styled-components";
import { Gray, Green, Main, Secondary } from "./Colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 160px 0 0;
  background-image: linear-gradient(
    rgba(65,105,225, 0.14),
    rgba(110, 182, 168, 0.3),
    rgba(110, 182, 168, 0.4)
  ), url(${(props) => props.img});
  background-position-x: right;
  width: 100%; height: 100vh;
  @media(min-width: 900px){
    padding: 0;
    justify-content: flex-end;
    align-items: center;
    background-size: cover;
   }
`
export const RelativeCont = styled.div`
  position: relative;
  width: 100%;
  height: 100vh
`
export const BrandContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 15px;
  justify-content: center;
  align-items: center;
  @media(min-width: 900px){
    top: 30px; left: 60px;      
  }
`
export const FormContainer = styled.div`
  padding: 40px;
  background-color: ${Gray};
  width: 95%;
  border-radius: 10px;
  box-shadow: 6px 8px 28px 8px rgba(0,0,0,0.1);
  @media(min-width: 450px){
    width: 430px;
  }
  @media(min-width: 900px){
    margin-right: 50px;     
  }
  @media(min-width: 1440px){
    width: 470px;
    margin-right: 180px;     
  }
`
export const Form = styled.form`
  margin: 0 auto;
  @media(min-width: 900px){
    width: 78%;
  }
  @media(min-width: 1440px){
    width: 85%;
  }
`
export const InputTitles = styled.p`
  margin: 17px 0 15px;
  font-weight: 700;
  color: ${Main};
  font-size: 17px;
`
export const Input = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  border-radius: 7px;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  color: ${Main};
  padding: 5px 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`
export const PasswordContainer = styled.div`
  position: relative;
  display: flex; 
  align-items: center;
`
export const Title1 = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${Main};
  margin-bottom: 20px;
`
export const IconAbs = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
`