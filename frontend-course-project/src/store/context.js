import { createContext } from 'react';
import { createInitStoreContext } from '../utils';

// init
export const NameGlobalState = {
    userInfo: 'userInfo',
    userRegister: 'userRegister',
}
const userInfo = createInitStoreContext(NameGlobalState['userInfo']);
const userRegister = createInitStoreContext(NameGlobalState['userRegister']);

const initStoreContext = {
    ...userInfo,
    ...userRegister
};
const StoreContext = createContext(initStoreContext);
export default StoreContext;