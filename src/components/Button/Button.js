import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
 
const STYLE = ['btn--primary', 'btn--outline', 'btn--white', 'btn--blue', 'btn--blueA', 'btn--outline--normal', 'btn--secondary'];
const SIZE  = ['btn--medium', 'btn--large', 'btn--normal'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link to='/contact' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export const Folio = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link to='/portfolio' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export const Services = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link to='/portfolio' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}