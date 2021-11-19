import React from 'react'
import { NameOfServiceWrapper, NameRow, NameCol, NameText, NameImage} from './Snamestyle'

function Servicename({
    headline,
    description,
    img,
    alt,
    imgStart
}) {
    return (
        <>
            <NameOfServiceWrapper  data-aos='slide-up'>
                <NameRow style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row' : 'row-reverse'}}>
                    
                    <NameCol>
                        <NameText>
                            <h1>{headline}</h1>
                            <p>{description}</p>
                        </NameText>
                    </NameCol>

                    <NameCol>
                        <NameImage>
                            <img src={img} alt={alt} />
                        </NameImage>
                    </NameCol>

                </NameRow>
            </NameOfServiceWrapper>
        </>
    )
}

export default Servicename
