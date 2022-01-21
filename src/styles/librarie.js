import styled from "styled-components";
import { Blue } from "./Colors";

export const ProgrBar = styled.div`
    margin: 20px 0 0;
    height: 15px;
    width: 100%;
    background: linear-gradient(to right, ${Blue} 0%, ${(props) => props.percent}%, white ${(props) => props.percent}%);
    border-radius: 7px;
`
export const FlexAr = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
`
export const Nums = styled.span`
    font-size: 13px;
`