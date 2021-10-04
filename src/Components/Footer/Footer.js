import React from 'react';
import './Footer.css';
import img from '../../images/logo-2.png'
const Footer = () => {
    return (
        <div className="footer">
           
            <img src={img} alt="" />
            <h2>© 2021 AsceticDesigners | All Rights Reserved</h2>
        </div>
    );
};

export default Footer;