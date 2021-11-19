import React, {useState} from 'react';
import {NavBar, NavBarWrapper, NavLogo, LogoIcon, NavBarIcon, NavBtn, NavBarMenu, NavLinks} from './NavbarStyle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button/Button';

function Navbar() {

    const [click, setClick] = useState(false);

    const CloseMobile = () => setClick(false);
    const HandleClick = () => setClick(!click);

    return (
        <>
            <NavBar>
                <NavBarWrapper>
                    <NavLogo onClick={CloseMobile}>

                        <LogoIcon>
                                
                        </LogoIcon>
                        
                            WBLD
                    </NavLogo>

                    <NavBarIcon onClick={HandleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </NavBarIcon>

                    
                    <NavBarMenu>
                        <ul className={click ? 'NavMenuActive' : 'NavMenu'}>
                            <li>
                                <NavLinks to="/" onClick={CloseMobile}>
                                    Home
                                </NavLinks>
                            </li>

                            <li>
                                <NavLinks to="/about" onClick={CloseMobile}>
                                    About
                                </NavLinks>
                            </li>

                            <li>
                                <NavLinks className='service' to="/services" onClick={CloseMobile}>
                                    Services
                                </NavLinks>

                            </li>

                            <li>
                                <NavLinks to="/portfolio" onClick={CloseMobile}>
                                    Portfolio
                                </NavLinks>
                            </li>

                            <li>
                                <NavLinks to="/contact" className="navlink-contact" onClick={CloseMobile}>
                                    Contacts
                                </NavLinks>
                            </li>
                            
                        </ul>
                    </NavBarMenu>

                    <NavBtn onClick={CloseMobile}>
                        <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
                            CONTACTS
                        </Button>
                    </NavBtn>

                </NavBarWrapper>
            </NavBar>
        </>
    )
}

export default Navbar;
