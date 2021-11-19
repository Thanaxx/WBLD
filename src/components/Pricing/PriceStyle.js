import styled from "styled-components";

export const PricingContainer = styled.div`
    background-color: #051B35;
    min-height: 100vh;
    padding: 0px 100px;

    @media screen and (max-width: 1200px){
        padding: 0px 20px;
    }

    @media screen and (max-width: 900px){
        padding: 0px 10px;
    }

    .priceHead{
        color: #EAC91D;
        font-size: 40px;
        margin-bottom: 20px;
        font-weight: 800;

        @media screen and (max-width: 900px){
            margin-left: 40px;
        }
    }
`;

export const Prices = styled.div`
    display: flex;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }

    main{
        width: 27%;
        background-color: white;
        margin: auto;
        padding: 20px 10px;
        border-radius: 5px;
        color: #051B35;

        @media screen and (max-width: 800px){
            width: 70%;
            margin-top: 50px;
        }


        @media screen and (max-width: 500px){
            width: 90%;
        }

        :hover{
            transform: scale(1.05);
        }


        .priceBox{
            text-align: center;

            img{
                margin-bottom: 10px;
            }

            .title{
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 1px;
            }

            h1{
                font-size: 35px;
            }
        }

        .services{
            margin: 10px 0px;
            display: flex;
            flex-direction: column;

            h4{
                margin-bottom: 0px;
                font-size: 13px;
                color: #5C5C5C;
            }

            h2{
                font-size: 15px;
                font-weight: 600;
                padding: 3px 0;
                color: #051B35;
                width: 100%;
            }
        }

        :nth-child(2){
            padding: 40px 10px;
        }
    }

    Button{
        width: 100%;
        border-radius: 5px;
    }
`;