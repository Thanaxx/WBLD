import styled from "styled-components";
import BackgroundImage from '../../../src/images-src/cover.jpg';


export const Cover = styled.div`
    height: 100vh;
`;

export const CoverImage = styled.div`
    background: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    height: 90vh;
    width: 100%;
`;

export const CoverWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 5rem;

    @media screen and (max-width:760px){
        padding-top: 3.5rem;
    }

`;

export const CoverTitle = styled.div`
    text-align: center;
    width: 70%;
    
    @media screen and (max-width:1200px){
        width: 80%;
    }

    @media screen and (max-width:1000px){
        width: 90%;
    }

    @media screen and (max-width:760px){
        width:95%;
    }

    span{
        font-size: 80px;
        font-weight: bolder;
        color: white;
        margin-top: 150px;
        line-height: 95px;

        @media screen and (max-width:1000px){
            margin-top: 10px;
        }

        @media screen and (max-width:760px){
            font-size: 60px;
            line-height: 75px;
        }
    }

    .modernity{
       color: #EAC91D;
    }

    p{
        color: white;
        font-size: 28px;
        padding:10px 0;

        @media screen and (max-width:760px){
            font-size: 20px;
        }
    }
`;

export const CoverButton = styled.div`
    padding-top: 40px;

    Button{
        margin: 0px 10px;

        @media screen and (max-width:400px){
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 100%;
            margin: 15px 0;
        }
    }
`;
