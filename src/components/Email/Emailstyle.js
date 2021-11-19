import styled from "styled-components";

export const EmailContainer = styled.div`
    min-height: auto;
    margin: auto;
`;

export const EmailName = styled.div`
    background-color: #EAC91D;
    padding: 100px 0;
    text-align: center;

    @media screen and (max-width: 900px){
        padding: 0 20px;
    }

    h1{
        font-size: 50px;
        padding: 30px 0;
        font-weight: bolder;
        color: #051B35;

        @media screen and (max-width: 900px){
            font-size: 35px;
        }

    }

    Button{
        margin: 30px 0;
    }

    p{
        font-size: 18px;
        padding: 30px 0;
        font-weight: bold;
        color: #051B35;
    }
`;