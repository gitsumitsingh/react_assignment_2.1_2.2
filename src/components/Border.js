import styled from "styled-components";
 
const Border = styled.div`
    border: 4px solid ${(props)=>props.color ? props.color : 'black'}
`;
 
export default Border;