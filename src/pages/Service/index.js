import React from 'react'
import Servicename from '../../components/ServicesName'
import { serviceObjA, serviceObjB, serviceObjC, serviceObjD } from './servicedata'
import Servicehead from '../../components/ServiceHead'
import Tag from '../../components/ServicesName/Tag'

function ServicesOffered() {
    return (
        <>
            <Servicehead />
            <Servicename {...serviceObjA}/>
            <Servicename {...serviceObjB}/>
            <Servicename {...serviceObjC}/>
            <Servicename {...serviceObjD}/>
            <Tag />
        </>
    )
}

export default ServicesOffered
