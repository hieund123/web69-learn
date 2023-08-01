import React from 'react';
import StoreContext, { NameGlobalState } from './context';
import { useCreateStateContext } from '../utils/hooks';
import { queryUserLogin, queryUserRegister } from './request';

const Store = (props) => {
    const userInfo = useCreateStateContext('userInfo', queryUserLogin);
    const userRegister = useCreateStateContext(NameGlobalState['userRegister'], queryUserRegister);
    return (
        <StoreContext.Provider value={{
            ...userInfo,
            ...userRegister
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Store;