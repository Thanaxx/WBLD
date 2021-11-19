import styled from "styled-components";

export const Service = styled.div`
    min-height: 100vh;
    background-color: #051B35;

    .home{
        background-color: white;
    }

    .darkBg{
        background-color: #051B35;
    }
`;

export const ServiceContainer = styled.div`

  @media screen and (max-width:7860px){
        flex-direction: column;
    }
`;

export const ServiceRow = styled.div`
    padding: 50px 40px;
    display: flex;
    flex-wrap: wrap;

    :nth-child(5){
        background-color: blue;
    }

    @media screen and (max-width:1000px){
        padding: 50px 10px;
    }
`;

export const ServiceCol = styled.div`
    flex: 1;
    margin: auto;
    padding: 0px 40px;

    @media screen and (max-width:1000px){
        padding: 0px 10px;
    }

    @media screen and (max-width:768px){
        max-width: 100%;
        flex-basis: 100%;
    }
`;

export const ServiceText = styled.div`
    padding: 0 20px;

    h1{
        color: #EAC91D;
        font-size: 60px;
        line-height: 66px;
        font-weight: bolder;
        padding: 10px 0;

        @media screen and (max-width:800px){
            font-size: 50px;
            line-height: 50px;
        }
    }

    p{
        font-size: 18px;
        font-weight: 500;
        margin: 15px 0;
        font-weight: 600;

        @media screen and (max-width:800px){
            font-size: 16px;
        }
    }

    .home_subtitle{
        color: white;
        font-weight: normal;
    }
    .dark{
        color: #262D3D;
        font-weight: bold;
    }

    Button{
        margin-top: 10px;
    }
`;

export const ServiceTop = styled.div`
    color: #EAC91D;
    font-size: 18px;
    font-weight: 600;
`;

export const ServiceImg = styled.div`
    img{
        width: 100%;
        text-align: center;
    }
`;
