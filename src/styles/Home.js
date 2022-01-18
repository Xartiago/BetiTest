import styled from "styled-components";

export const Container = styled.div`
    position: relative; 
    background-image: linear-gradient(
        rgba(65,105,225, 0.14),
        rgba(110, 182, 168, 0.3),
        rgba(110, 182, 168, 0.4)
      ), url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position-x: right;
    width: 100%; height: 100vh;
    @media(min-width: 900px){
      background-size: cover;
    }
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