import React from 'react';

function Button({ button_text, button_action }) {
    return (
        <button onClick={button_action} className="special_button">
            {button_text}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default Button;
