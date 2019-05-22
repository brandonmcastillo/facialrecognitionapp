import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import picture from './Logo.png';

const Logo = () => {
    return (
        <div className="ma4 center mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 100 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-Inner">
                    <img style={{ paddingTop: '5px' }} alt="float" src={picture} />
                </div>
            </Tilt>
        </div>
    )
};

export default Logo;