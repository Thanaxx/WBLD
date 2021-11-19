import React from 'react'
import { AboutContainer, AboutText } from './AboutStyle'
import { Folio } from '../Button/Button'

function About() {
    return (
        <>
            <AboutContainer>
                <AboutText data-aos='zoom-in'>
                    <h1>Helping You in Growing Your Business in the Digital World</h1>
                    <p>We are your business associate in developing your services and enabling you in responding to technological advancements. We are providing solutions to the world's emerging problems and preventing businesses from drifting behind without intervention, which is why we sought to be a part of your success by growing your business on the other side of the corporate world through the use of technology.</p>
                    <Folio buttonStyle='btn--secondary' buttonSize='btn--normal'>Learn more </Folio>
                </AboutText>
            </AboutContainer>
        </>
    )
}

export default About
