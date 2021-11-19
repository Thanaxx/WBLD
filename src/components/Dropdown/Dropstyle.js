import styled from "styled-components";

export const Dropmain = styled.div`

    ul{
        display: block;
        text-align: start;
        background-color: white;
        color: #262D3D;
        width: 200px;
        position: absolute;
        top: 80px;
    }

    .dropdown{
        list-style: none;
    }

    .dropdown li{
        display: block;
    }

    .clicked{
        display: none;
    }
            
    .dropdown-link{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #262D3D;
        font-weight: bold;
        padding: 14px 16px;
    }

    .dropdown-link:hover{
        font-weight: 600;
        color: #EAC91D;
    }
`;