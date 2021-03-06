import styled from "styled-components";
import { Main } from "./Colors";

export const Select = styled.select`
    width: 100%;
    margin-top: 3px;
    height: 40px;
    border: none;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    color: ${Main};
`
export const Option = styled.option`
    color: ${Main};
    background-color: #fff;
`
export const CondsYTermsCont = styled.div`
    display: flex;
    align-items: center;
`
export const Checkbox = styled.input`
    margin: 10px 4px 0 0;
    width: 20px;
    height: 30px;
    cursor: pointer;
    border 0;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`
export const Span = styled.span`
    font-size: 16px;
    margin: 10px 0 0 5px;
    color: ${Main};
`
export const ErrorsSpan = styled.span`
    font-size: 12px;
    color: #c63637;
`