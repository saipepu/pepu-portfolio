import React from 'react';
import './Button.css';

const Button = ( {children, type} ) => {

    return (
        <>
        <button className={`btn ${type}`}>
            {children}
        </button>
        </>
    )
}
export default Button;