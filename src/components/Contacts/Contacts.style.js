import styled from 'styled-components';
export const ContactsConteiner = styled.ul`
position: relative;
background-color:transparent;
color:black;
padding-top:30px;
`
export const Item = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
height:auto;
list-style: none;
word-spacing:10px;

`
export const Btn = styled.button`
display:block;
background-color: transparent;
border-radius:10%;
cursor: pointer;
border:none;
width:auto;
height:auto;
margin-left:auto;
margin-right:40px;
font-size:20px;
color: black;
&:hover {
    color: red; // <Thing> when hovered
  }

`
export const Contact = styled.p`
font-size:16px;
font-weight:400;

`
export const Span = styled.span`
font-size:16px;
font-weight:400;
line-height:1;
margin-right:20px;
`
export const Img = styled.img`
width:40px;
height:40px;
margin-right:15px;
` 