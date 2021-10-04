import React from 'react';

import './Footer.css';
import img from '../../images/logo-2.png'
const Footer = () => {
    return (

        // add footer image and icons
        <div className="footer">
           
            <img src={img} alt="" />
            <br/>
            <i class="fab fa-facebook font-icon"></i>
                    <i class="fab fa-instagram-square font-icon"></i>
                    <i class="fab fa-twitter font-icon"></i>
                    <i class="fab fa-google-plus font-icon"></i>
            <h2>© 2021 AsceticDesigners | All Rights Reserved</h2>
        </div>
    );
};

export default Footer;