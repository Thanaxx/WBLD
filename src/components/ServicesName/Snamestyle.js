import styled from "styled-components";

export const NameOfServiceWrapper = styled.div`
    background-color: #051B35;
    padding: 50px;

    @media screen and (max-width:768px){
        padding: 50px 20px;
    }
`;

export const NameRow = styled.div`
    flex-wrap: wrap;
`;

export const NameCol = styled.div`
    flex: 1;
    margin: auto;

    @media screen and (max-width:768px){
        max-width: 100%;
        flex-basis: 100%;
    }
`;

export const NameText = styled.div`

    @media screen and (min-width:1000px){
        padding: 0 10px;
    }

    @media screen and (max-width:1000px){
        padding: 0 10px;
    }

    h1{
        color: #EAC91D;
        font-size: 40px;
        font-weight: bolder;
    }

    p{
        color: white;
        padding: 10px 0;
        text-align: justify;
    }
`;

export const NameImage = styled.div`
    text-align: center;

    img{
        max-width: 100%;

        @media screen and (max-width: 786px){
            padding: 20px 0px;
        }
    }
`;

export const TagHead = styled.div`
    padding: 100px;
    background-color: #051B35;

    @media screen and (max-width: 786px){
        padding: 100px 20px;
    }
`;

export const TagName = styled.div`
    text-align: center;

    h1{
        font-size: 40px;
        color: white;

        @media screen and (max-width: 786px){
            font-size: 30px;
        }
    }

    Button{
        margin: 40px 0;
    }
`;