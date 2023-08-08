import React from 'react';
import { Avatar } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useSelectGlobalState } from '../../utils/hooks';
import { NameGlobalState } from '../../store/context';
import { ReactComponent as IconCamera } from '../../assets/svgs/icon-camera.svg';
import './styles.scss';

const listRouteMe = [
    {
        title: 'Profile',
        url: '/me/profile'
    },
    {
        title: 'Posts',
        url: '/me/posts'
    },
    {
        title: 'Follows',
        url: '/me/follows'
    },
    {
        title: 'My info',
        url: '/me/my-info'
    },
    {
        title: 'Privacy',
        url: '/me/privacy'
    },
    {
        title: 'Password',
        url: '/me/password'
    },
]
const MeLayout = () => {
    const dataUser = useSelectGlobalState(NameGlobalState['userInfo']);
    return (
        <div className="layout-me">
            <div className="side-bar">
                <Avatar size={150} icon={<IconCamera className="icon-camera" />} />
                <p className="userName">
                    {dataUser.data.userName}
                </p>
                <p>Hà Nội, Việt Nam</p>
                <div className="list-nav">
                    <ul>
                        {
                            listRouteMe.map((item, idx) => {
                                return <Link key={item.url} to={item.url}>
                                    <li>
                                        {item.title}
                                    </li>
                                    {idx === 2 && <hr />}
                                </Link>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="main-content-me">
                <Outlet />
            </div>
        </div>
    )
}

export default MeLayout;