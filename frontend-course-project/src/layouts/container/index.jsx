import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { mapKeyWithRouter } from '../../global';
import './style.scss';


const Container = () => {
    const nav = useNavigate();
    const items = [
        {
            label: 'Social Media WEB69',
            key: 'LOGO',
        },
        {
            label: 'Home',
            key: 'HOME',
        },
        {
            label: 'Message',
            key: 'MESSAGE',
        },
        {
            label: 'Noti',
            key: 'NOTI',
        },
        {
            label: 'Me',
            key: 'ME',
        },
    ]
    return (
        <div className="container-layout-main">
            <div className="nav-bar">
                <Menu
                    className="menu-customize"
                    mode="horizontal"
                    items={items}
                    onSelect={(info) => {
                        nav(mapKeyWithRouter[info.key]);
                    }}
                />
            </div>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Container;