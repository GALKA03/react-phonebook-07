import styled from 'styled-components';
export const Label = styled.label`
display:block;
color: rgb(20, 100, 60);
text-align:center;
font-size:16px;
`
export const Input = styled.input`
//min-width:250px;
background-color:transparent;
border:1px solid green;
border-radius:5%;
outline: none; 
&:hover {
    color: green; // <Thing> when hovered
  }
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color;
    ;
&:focus {
    border-color: red;}
`