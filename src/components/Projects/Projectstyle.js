import styled from "styled-components";

export const ProjectContainer = styled.div`
    min-height: 100vh;
    background-color: #051B35;
    padding: 0px 20px;
    margin-top: 80px;

    @media screen and (max-width: 900px) {
        margin-top: 0px;
        padding: 0px 10px;
    }
`;

export const ProjHeader = styled.div`
    display: flex;
    padding: 20px 40px;

    @media screen and (max-width: 900px) {
        padding: 0;
        flex-direction: column;
    }
`;

export const ProjectLeft = styled.div`
    flex: 1;
    margin: auto;

    h1{
        color: white;
        text-align: center;
        font-size: 70px;    
        margin-bottom: 30px;
        text-align: left;

        @media screen and (max-width: 900px) {
            font-size: 40px;
            margin-bottom: 10px;
        }
    }
`;

export const ProjRight = styled.div`
    flex: 2;
    
    h2{
        color: white;
        font-size: 20px;
        font-weight: 500;

        @media screen and (max-width: 900px) {
            font-size: 16px;
            text-align: center;
        }
    }
`;


export const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
`;

export const ProjectLists = styled.div`
    margin: auto;
    padding: 20px 0;

    .SingleTeam{
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .SingleTeam:hover img{
        transform: scale(1.1);
        opacity: 0.5;
    }

    .team-img{
        position: relative;
    }

    .team-img img{
        width: 100%;
        z-index: 10;
        transition: 0.9s;
        border-radius: 10px;
    }

    .overlay-text {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .overlay-text h1{
        color: white;
    }

    .SingleTeam:hover .overlay-text{
        opacity: 1;
    }
`;
