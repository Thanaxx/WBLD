import React from 'react';
import Coverpage from '../../components/Coverpage';
import Services from '../../components/Services';
import {serviceObj, serviceObjOne, serviceObjThree} from './data';
import Price from '../../components/Pricing';

function Home() {
    return (
        <>
            <Coverpage />
            <Services {...serviceObj} />
            <Services {...serviceObjOne} />
            <Price />
            <Services {...serviceObjThree} />
        </>
    )
}

export default Home;
