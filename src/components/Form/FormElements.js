import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
min-height:692px;
position: relative;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background:#000;
`;

export const FormWrap = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
@media screen and (max-width:400px){
    height:80%;
}
`;

export const Icon = styled(Link)`
margin-left:32px;
margin-top:30px;
text-decoration:none;
color:#fff;
font-weight:700;
font-size:32px;

@media screen and (max-width:480px){
    margin-left:16px;
    margin-top:8px;
}
`;

export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:480px){
    padding:10px
}
`;

export const Form1 = styled.form`
background:#fff;
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding: 60px 32px;
border-radius:4px;
box-shadow: 0 1PX 3PX RGBA(0,0,0,0.9);
margin-bottom:2em;

@media screen and (max-width:400px){
    padding:32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom:40px;
color:#78E11B;
font-size:20px;
font-weight:400;
text-align:center;
`;

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:#78E11B;
`;

export const FormInput = styled.input`
    padding:16px 16px;
    border:1.5px solid rgba(0, 0, 0, 0.23);
    border-radius:4px;
    margin-bottom:18px;
    &:hover{
        border-color:#000;
    }
`;
export const FormInputArea = styled.textarea`
    padding:16px 16px;
    margin-bottom:32px;
    border:1.5px solid rgba(0, 0, 0, 0.23);
    border-radius:4px;
    height:150px;
    resize:none;

    &:hover{
        border-color:#000;
    }
`;

export const FormOptionsWrapper = styled.div`
    margin-bottom:20px;

`;

export const FormButton = styled.button`
background:#78E11B;
padding:16px 0;
border:none;
border-radius:30px;
color:#fff;
font-size:20px;
cursor:pointer;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.3s ease-in-out;
    background:#000;
}
`;

export const Text = styled.span`
text-align:center; 
margin-top:24px;
color:#fff;
font-size:14px;
`;

export const FormFieldError = styled.div`
color:red;
    margin-bottom:15px;
    font-size:13px;
`;

export const FormEmail = styled.div`
margin-bottom:20px;
color:#000;
font-size:15px;
font-weight:bold;
text-align:center;
`