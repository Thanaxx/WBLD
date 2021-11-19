import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background-color: #051B35;
    min-height: auto;
    padding: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    p{
        font-weight: 500;
        font-size: 18px;
        color: white;
        padding: 10px 0;
    }

    @media screen and (max-width: 768px){
        padding: 50px 10px;
    }
`;


export const FooterLinks = styled.div`
        padding: 10px 0
`;

export const LinkName = styled(Link)`
        text-decoration: none;
        color: white;
        margin: 0px 10px;
        color: #EAC91D;
`;

export const FooterPatent = styled.h2`
    color: white;
    font-size: 14px;
    font-weight: lighter;
    color: #A8A8A8;
    padding-top: 10px;
`;

// export const FooterCnd = styled.p`
//     padding: 10px 0;
// `;

// export const LinkCnd = styled(Link)`
//         text-decoration: none;
//         color: white;
//         margin: 0px 10px;
//         font-weight: lighter;
//         font-size: 14px;
// `;
