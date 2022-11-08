import React from 'react';
import ImgLoad from '../img/letras-rym.png'

const Loader = () => {
    return (
        <div className='contImgLoader'>
            <img className='imgLoader' src={ImgLoad} alt="" />
        </div>
    );
};

export default Loader;