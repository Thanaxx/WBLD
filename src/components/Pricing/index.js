import React from 'react'
import { price } from './PriceData'
import { Button } from '../Button/Button'
import {PricingContainer, Prices} from './PriceStyle'

function Price() {
    return (
        <>
            <PricingContainer data-aos="fade-zoom">
                <h2 className="priceHead">Pricing</h2>

                <Prices>
                    {price.map((prices) => {
                        return(
                            <main>
                                <div className="priceBox">
                                    <img src={prices.image} alt="prc" />
                                    <p className='title'>{prices.title}</p>
                                    <h1>{prices.value}</h1>
                                    
                                    <div className="services">
                                        <h4>{prices.essential}</h4>
                                        <h2>{prices.srvcA}</h2>
                                        <h2>{prices.srvcB}</h2>
                                        <h2>{prices.srvcC}</h2>
                                        <h2>{prices.srvcD}</h2>
                                        <h2>{prices.srvcE}</h2>
                                        <h2>{prices.srvcF}</h2>
                                        <h2>{prices.srvcG}</h2>
                                    </div>

                                    <Button buttonStyle='btn--blueA' buttonSize='btn--normal'>CHOOSE YOUR PLAN</Button>
                                </div>
                            </main>
                        )
                    })}
                </Prices>
            </PricingContainer>
        </>
    )
}

export default Price