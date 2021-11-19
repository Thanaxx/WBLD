import React from 'react'
import {TagHead, TagName } from './Snamestyle'
import { Button } from '../Button/Button'

function Tag() {
    return (
        <>
            <TagHead data-aos='zoom'>
                <TagName>
                    <h1>Have you made the choice? Connect your ideas with us right now, and we will help you.</h1>
                    <Button buttonSize='btn--large'>GET STARTED NOW</Button>
                </TagName>
            </TagHead>
        </>
    )
}

export default Tag
