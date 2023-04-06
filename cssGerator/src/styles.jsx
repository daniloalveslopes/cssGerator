import styled from "styled-components"

export const Btn = styled.button`
    color: white;
    background-color: rgb(29 78 216);
    width: ${(props) => (props.width)+"px"};
    height: ${(props) => (props.height)+"px"};
    color: ${(props) => (props.color)};
    background-color: ${(props) => (props.backGround)}
`