import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../../../src/images-src/logo.svg';

export const NavBar = styled.nav`
    background-color: #051B35;
    height: 80px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
`;

export const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
  
    @media screen and (max-width: 1050px){
         justify-content: space-between;
    }
`;

export const NavLogo = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    color: white;
    font-family: 'Poppins', sans-serif;
    width: 10%;
    margin-left: 50px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1050px){
        width: 50%;
    }

    @media screen and (max-width: 900px){
        margin-left: 20px;
    }
`;

export const LogoIcon = styled(Link)`
    background-image: url(${Logo});
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const NavBarIcon = styled.div`
    text-decoration: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
    display: none;
    position: absolute;
    right: 40px;
    top: 22px;

    @media screen and (max-width: 1050px){
        display: block;
    }

    @media screen and (max-width: 900px){
        right: 20px;
    }
`;

export const NavBarMenu = styled.div`
    width: 75%;
    text-align: right;
    margin-right: 50px;


    ul{
        align-items: center;
        justify-content: center;
        display: flex;
    }


    li{
        list-style-type: none;
    }

    @media screen and (max-width: 1050px){

        .NavMenuActive{
            background-color: #051B35;
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 80px;
            left: 0%;
            bottom: 0;
            z-index: 1;
            display: block;
            text-align: center;
            padding: 10px 0;
            transition: 0.5s;
            opacity: 1;
            
        }
        .NavMenu{
            width: 100%;
            height: 90vh;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }
    }

    .navlink-contact{
        display: none;

        @media screen and (max-width: 1050px){
            display: block;
            border: 1px solid #EAC91D;
            color: #EAC91D;
            width: 70%;
            margin: 10px auto;
            padding: 16px 0;

            :hover{
                background-color: white;
                border: 1px solid white;
                color: #051B35;
            }
        }
    }
`;

export const NavLinks = styled(Link)`
    margin: 0px 50px;
    padding: 0px 5px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 30px 0;

    :hover{
        color: #EAC91D;
    }

    @media screen and (max-width: 1050px){
        display: table;
        width: 100%;
        text-align: center;
        margin: 0px;

    }

`;

export const NavBtn = styled.div`
     width: 15%;

     @media screen and (max-width: 1050px){
        display: none;
    }
`;

