import styled from "styled-components";
import { Green, Main, PrimaryGray, White } from "./Colors";

export const Img = styled.img`
	padding-left: 10px;
	@media(min-width: 450px){
		width: ${(props) => props.width};
		height: ${(props) => props.height};
	}
`
export const Title = styled.p`
	font-size: 23px;
	color: ${Main};
	margin-bottom: 20px;
`
export const P = styled.p`
	margin: 12px 0;
	font-size: 16px;
	color: ${Main};
`
export const PWCenter = styled.p`
	margin: 5px 0;
	font-size: 16px;
	color: ${Main};
	text-align: center;
`
export const FirstButtons = styled.button`
	margin: 10px 0;
  width: 100%;
  height: 45px;
	font-family: Roboto;
	background-color: ${Green};
	border: none;
	border-radius: 10px;
	color: ${White};	
	font-size: 14px;
	cursor: pointer;
	&:hover{
		background-color: #4ad9be;
		transition: 0.5s;
	}
`
export const RelPos = styled.div`
	position: relative;
	display: flex;
`
export const Containers = styled.div`
	z-index: 0;
	position: relative;
	height: 78vh;
	padding: 30px 10px;
	background-color: ${PrimaryGray};
`
export const SpanMin = styled.span`
	font-size: 16px;
	font-weight: semi-bold;
	padding: 20px;
`
export const Ption = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
`
export const PtionText = styled.div`
	margin-left: 15px;
	display: flex; 
	flex-direction: column;
	justify-content: center;
`
export const PtionTle = styled.h3`
	font-weight: 700;
	font-size: 18px;
	color: #000;
`
export const PtionP = styled.div`
	font-size: 14px;
	color: ${Main};
`