import styled from "styled-components";

export const MessageWrapper = styled.div`
    min-height: 100vh;
    background-color: #051B35;
    padding: 50px;

    @media screen and (max-width: 900px) {
        padding: 10px;
    }
    
    h1{
        text-align: center;
        color: white;
        margin-bottom: 30px;
        font-size: 50px;

        @media screen and (max-width: 786px) {
            font-size: 30px;
            margin-bottom: 25px;
        }
    }
`;

export const MessageForm= styled.div`
    background-color: white;
    width: 80%;
    margin: auto;
    padding: 40px 20px;
    border-radius: 5px;

    @media screen and (max-width: 786px) {
        width: 100%;
    }

    label{
        margin: 8px 0;
        color: #051B35;
        font-weight: bold;
    }

    input{
        width: 100%;
        padding: 8px 6px;
        border-radius: 5px;
        border: 1px solid #DBD9D9;
        outline-color: #EAC91D;
        outline-width: 1px;
        font-weight: bold;
    }

    select{
        padding: 6px;
        border: 1px solid #DBD9D9;
        outline-color: #EAC91D;
        outline-width: 1px;
        font-weight: bold;
        border-radius: 5px;
    }

    option{
        font-weight: bold;
    }
    
    textarea{
        padding: 6px;
        border: 1px solid #DBD9D9;
        outline-color: #EAC91D;
        outline-width: 1px;
        font-weight: bold;
        resize: none;
    }

    .fullname{
        display: flex;

        .firstName{
            width: 50%;
            margin-right: 10px;
        }

        .lastName{
            width: 50%;
        }
    }

    .details{
        display: flex;
        flex-direction: column;
    }

    .send{
        margin: 40px 0 0  10px;
        text-align: center;

        button{
            width: 100%;
            color: white;
            background-color: #051B35;
            border: none;
            outline-width: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;