import styled from "styled-components";

export const HeadWrapper = styled.div`
    min-height: auto;
    padding: 100px;
    background-color: #051B35;

    /* @media screen and (max-width: 768px){
        margin-top: 70px;
        padding: 100px 20px;
    } */

    @media screen and (max-width: 768px){
        margin-top: 0px;
        padding: 25px 10px;
    }
`;

export const HeadTitle = styled.div`
    text-align: center;
    color: white;

    h1{
        font-size: 70px;

        @media screen and (max-width: 900px){
            font-size: 40px;
        }

    }

    p{
        margin: 20px 0;
        font-size: 20px;
        font-weight: 500;

        @media screen and (max-width: 900px){
            font-size: 16px;
        }
    }
`;