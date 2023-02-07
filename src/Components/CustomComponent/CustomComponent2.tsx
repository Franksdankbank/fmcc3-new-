import { Rosario } from "@next/font/google";
import React, { Children, ReactElement, ReactNode } from "react";
import Styles from './CustomComponent.module.css'

interface CustomComponentProps {
    children: ReactNode
}

const CustomComponent2: React.FC<CustomComponentProps> = (props) => {
    const {children} = props
    const test = 6
    return (<div className={Styles.container}>
        {test}
        {children}
    </div>)
}
    


export default CustomComponent2