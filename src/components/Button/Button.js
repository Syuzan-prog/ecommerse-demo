import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <button 
            type="submit"   
            className="btn form-control "
            onClick={props.onClick}
            >Login</button>
    )
}
export default Button;