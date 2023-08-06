import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelectGlobalState } from '../../utils/hooks';
import { NameGlobalState } from '../../store/context';
import './styles.scss';

const AuthProtect = (props) => {
    const [loading, setLoading] = useState(true);
    const getAccessToken = localStorage.getItem('accessToken');
    const crrUser = useSelectGlobalState(NameGlobalState['userInfo']);
    const queryUserInfo = useSelectGlobalState('getUserInfo');

    const nav = useNavigate();
    useEffect(() => {
        if (!getAccessToken) {
            nav('/auth/login');
        } else {
            queryUserInfo.query({
                headers: {
                    Authorization: `Bearer ${getAccessToken}`
                }
            });
        }
    }, []);
    useEffect(() => {
        if (queryUserInfo.success && !crrUser.data) {
            crrUser.insertData(queryUserInfo.data);
            localStorage.setItem('accessToken', queryUserInfo.data.accessToken);
        } else if (queryUserInfo.data && !queryUserInfo.success) {
            nav('/auth/login');
            localStorage.removeItem('accessToken');
        }
        if (crrUser.data && crrUser.success && loading) {
            setLoading(false);
        }
    }, [queryUserInfo, crrUser, loading]);

    return (
        <div className={`auth-protect ${loading ? 'isCheckingAuth' : ''}`}>
            {
                loading ? <div>Loading...</div> :
                    props.children
            }
        </div>
    )
}

export default AuthProtect;