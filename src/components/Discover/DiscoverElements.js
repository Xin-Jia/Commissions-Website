import styled from 'styled-components';

export const DiscoverContainer = styled.div`
height:860px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#fff;

@media screen and (max-width:768px){
    height:1100px;
}
@media screen and (max-width:480px){
    height:1300px;
}
`;

export const DiscoverWrapper = styled.div`

}
`;

export const DiscoverH1 = styled.h1`
    font-size:2.5rem;
    color:#000;
    margin-bottom:64px;

@media screen and (max-width:480px){
    font-size:2rem;
}
`;

export const DiscoverIcon = styled.img`
width:20% !important;
height:20% !important;
margin-bottom:10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`;