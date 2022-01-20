import styled from "styled-components";
import { Green } from './Colors'

export const NavCont = styled.div`
	z-index: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80px;
	background-color: ${Green};
	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`
export const LeftCont = styled.div`
	margin-top: 10px;
	@media(min-width: 650px){
		margin: 10px 0 0 20px;
	}
`
export const VerticalStick = styled.hr`
	height: 40px;
	background-color: white;
	border: 1px solid #fff;
	@media(min-width: 650px){
		height: 45px;
	}
`
export const MobileCont = styled.div`
	width: 90px;
	justify-content: space-between;
	margin-right: 20px;
	display: flex;
	align-items: center;
	@media(min-width: 650px){
		display: none;
	}
`
export const RightCont = styled.div`
	display: none;
	@media(min-width: 650px){
		width: 200px;
		margin-right: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media(min-width: 1100px){
		margin-right: 50px;
	}
`
export const Logout = styled.h3`
	color: white;
	font-weight: 500;
	font-size: 16px;
`