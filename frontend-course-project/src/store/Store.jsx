import React from 'react';
import StoreContext, { NameGlobalState } from './context';
import { useCreateStateContext } from '../utils/hooks';
import { queryUserInfo, queryUserLogin, queryUserRegister } from './request';

const Store = (props) => {
    const userInfo = useCreateStateContext('userInfo', queryUserLogin);
    const userRegister = useCreateStateContext(NameGlobalState['userRegister'], queryUserRegister);
    const queryGetUserInfo = useCreateStateContext('getUserInfo', queryUserInfo);
    return (
        <StoreContext.Provider value={{
            ...userInfo,
            ...userRegister,
            ...queryGetUserInfo
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Store;