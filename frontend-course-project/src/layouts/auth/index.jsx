import React from 'react';
import { Outlet } from 'react-router-dom';
import imgIntro from '../../assets/imgs/intro.png';
import './style.scss';

const LayoutAuth = () => {
    return (
        <div className="layout-auth-container">
            <div className="part part-left">
                <img src={imgIntro} alt="" />
            </div>
            <div className="part part-right">
                <h1 className="text-center">Social Media App - WEB69-HĐT</h1>
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutAuth;