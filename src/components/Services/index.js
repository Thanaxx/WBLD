import React from 'react'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {Service, ServiceContainer, ServiceRow, ServiceCol, ServiceText, ServiceTop, ServiceImg} from './ServiceStyle';

function Services({
    lightBg,
    topLine,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
})


{
    return (
        <>
            <Service data-aos='slide-up'>
                <ServiceContainer className={lightBg ? 'home' : 'home darkBg'}>
                    <ServiceRow
                        style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row': 'row-reverse'}}
                    >

                        <ServiceCol>
                            <ServiceText>
                                <ServiceTop>{topLine}</ServiceTop>
                                <h1>{headline}</h1>
                                <p className={lightTextDesc ? 'home_subtitle' : 'home_subtitle dark'}>{description}</p>
                                <Link to="/sign-up">
                                    <Button buttonStyle='btn--secondary' buttonSize='btn--normal'>{buttonLabel}</Button>
                                </Link>
                            </ServiceText>
                        </ServiceCol>

                        <ServiceCol>
                            <ServiceImg>
                                <img src={img} alt={alt} />
                            </ServiceImg>
                        </ServiceCol>

                    </ServiceRow>
                </ServiceContainer>
            </Service>
        </>
    )
}

export default Services;
