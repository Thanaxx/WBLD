import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from './MenuItems'
import {Dropmain} from './Dropstyle'

function Drop() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    return (
        <Dropmain>
            <ul onClick={handleClick} 
                className={click ? 'dropdown clicked' : 'dropdown'}
            >
                {MenuItem.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link
                             className={item.cName}
                             to={item.path}
                             onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                        )
                })}
            </ul>
        </Dropmain>
    )
}

export default Drop;
