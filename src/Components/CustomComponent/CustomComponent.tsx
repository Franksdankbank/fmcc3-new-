import { Rosario } from "@next/font/google";
import React, { Children, ReactElement, ReactNode } from "react";
import Styles from './CustomComponent.module.css'

interface CustomComponentProps {
    children: ReactNode
}

const CustomComponent: React.FC<CustomComponentProps> = (props) => {
    const {children} = props
    const test = 6
    return (<div className={Styles.container}>
        {test}
        {children}
    </div>)
}
    


export default CustomComponent
//to add another component make another file in the components folder per the guidance of harry


// this is how i export another component
