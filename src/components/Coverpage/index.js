import React from 'react';
import { Button } from '../Button/Button';
import { Services } from '../Button/Button';
import {Cover, CoverImage, CoverWrapper, CoverTitle, CoverButton} from './CoverpageStyle';

function Coverpage() {

    return (
        <>
            <Cover >
                <CoverImage>
                    <CoverWrapper data-aos='zoom-in'>
                        <CoverTitle>
                            <span>We Build Your Business</span>
                            <span className='modernity'> In Modernity</span>
                            <p>Ready to develop, design, and deploy your very own
                                product or brand in an easy set-up
                            </p>
                        </CoverTitle>

                        <CoverButton>
                            <Button buttonStyle='btn--primary' buttonSize='btn--large'>MESSAGE US</Button>
                            <Services buttonStyle='btn--outline--normal' buttonSize='btn--large'>VIEW SERVICES</Services>
                        </CoverButton>
                    </CoverWrapper>
                </CoverImage>
            </Cover>
        </>
    )
}

export default Coverpage;
