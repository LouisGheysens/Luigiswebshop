import React from 'react';
import './BackDrop.css'

const Backdrop = ({show, click}) => {
    return show && <div className="backdrop" onClick={click}></div>
}

export default Backdrop
