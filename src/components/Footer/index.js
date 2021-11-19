import React from 'react';
import {FooterContainer, FooterLinks, LinkName, FooterPatent} from './FooterStyle';

function Footer() {
    return (
        <>
        <FooterContainer>
        <p>No matter what you’re envisioning, we’ll help you build a better solution.</p>

            <FooterLinks>
                <LinkName to="/about">ABOUT</LinkName>
                <LinkName  to="/services">SERVICES</LinkName>
                <LinkName  to="/portfolio">ALL IN ONE</LinkName>
            </FooterLinks>

            <FooterPatent>
                Copyright © 2021 WBLD All Rights Reserved
            </FooterPatent>

            {/* <FooterCnd>
                <LinkCnd to="/contact">Terms and Conditions</LinkCnd> <span>|</span>
                <LinkCnd to="/contact">Privacy Policy</LinkCnd> <span>|</span>
                <LinkCnd to="/contact">Cookies Policy</LinkCnd>
            </FooterCnd> */}
        </FooterContainer>
        </>
    )
}

export default Footer
