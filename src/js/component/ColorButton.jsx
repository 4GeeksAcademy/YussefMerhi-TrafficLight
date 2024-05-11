import React from 'react';

const ColorButton = ({ switchColor }) => {
    return (
        <button onClick={switchColor}>Cambiar color</button>
    );
}

export default ColorButton;