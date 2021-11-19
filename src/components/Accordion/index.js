import React, {useState} from 'react'
import { AccMain, AccWrapper, AccLeft, AccRight, AccData, Wrap, Dropdown } from './Accordionstyle'
import { Data } from './datafile'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

function Accordion() {

    const [click, setClick] = useState(false);

    const toggle = index => {
        if(click === index) {
            return setClick(null)
        }
        
        setClick(index)
    }

    return (
        <>
            <AccMain data-aos='slide-up'>
                <AccWrapper>
                    <IconContext.Provider value={{color: '#EAC91D', size: '25px'}}>
                        <AccLeft>
                            <h1>Why work with us?</h1>
                                <AccData>
                                    {Data.map((item, index)  => {
                                        return(
                                            <>
                                                <Wrap onClick={() => toggle(index)} key={index}>
                                                    <span>{click === index ? <FiMinus/> : <FiPlus/> }</span>
                                                    <h2>{item.service}</h2>
                                                </Wrap>

                                                {click === index ? (
                                                    <Dropdown>
                                                        <p>{item.explain}</p>
                                                    </Dropdown>
                                                ) : null}
                                            </>
                                        )
                                    })}
                                </AccData>
                        </AccLeft>
                    </IconContext.Provider>

                    <AccRight>
                        <img src="./pictures/AccordionBT.jpg" alt="" />
                    </AccRight>
                </AccWrapper>
            </AccMain>
        </>
    )
}

export default Accordion
