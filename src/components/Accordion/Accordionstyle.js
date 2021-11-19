import styled from "styled-components";

export const AccMain = styled.div`
    background-color: #051B35;
    min-height: auto;
    padding: 50px;

    @media screen and (max-width: 1000px){
        padding: 50px 10px;
    }
`;

export const AccWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`;


export const AccRight = styled.div`
    flex: 1;
    text-align: center;
    padding: 20px;

    @media screen and (max-width: 1000px){
        padding: 50px 10px;
    }

    img{
        @media screen and (max-width: 786px){
            width: 100%;
        }
    }
`;

export const AccLeft = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1{
        margin-bottom: 20px;
        color: white;
        font-size: 50px;

        @media screen and (max-width: 1000px){
            text-align: center;
            font-size: 35px;
        }

        @media screen and (max-width: 900px){
            font-size: 35px;
        }
    }

`;

export const AccData = styled.div`
    width: 100%;
`;

export const Wrap= styled.div`
  margin: 10px 0;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;

    span{
        padding: 0 10px;
    }


  h2{
      padding: 10px 0;
      font-size: 25px;
      text-align: left;

    @media screen and (max-width: 1000px){
        font-size: 20px;
    }
  }
`;

export const Dropdown = styled.div`

    p{
        color: white;
        font-size: 18px;
        padding-left: 40px;
    }
`;