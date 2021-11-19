import React from 'react'
import { Button } from '../Button/Button'
import { EmailContainer, EmailName } from './Emailstyle'

function Email() {
    return (
        <>
            <EmailContainer data-aos='slide-up'>
                <EmailName>
                    <h1>Let’s Unlock The Full Potential of Your Idea</h1>
                    <Button buttonStyle='btn--blue' buttonSize='btn--large'>Learn more</Button>
                    <p>Drop your enquiries to wbldsolution@gmail.com</p>
                </EmailName>
            </EmailContainer>
        </>
    )
}

export default Email
