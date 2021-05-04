import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
border-radius:50px;
background:${({ primary }) => (primary ? '#78E11B' : '#010606')};
white-space:nowrap;
padding:${({ big }) => (big ? '14px 48px' : '9px 30px')};
color:${({ dark }) => (dark ? '#010606' : '#fff')};
font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background:${({ primary }) => (primary ? '#fff' : '#78E11B')};
}
`;


export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#78E11B;
    white-space:nowrap;
    padding:10px 22px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color:#fff;
    }
`;

export const TextLink = styled(LinkR)`
    font-weight:bold;
    text-decoration:none;
    color:#78E11B;
`;