import { useState, useContext } from "react";
import StoreContext from "../store/context";

const useCreateStateContext = (nameState, queryFunction) => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        success: false,
        message: '',
    });
    const query = (payload) => {
        queryFunction(payload, state, setState);
    }
    const clear = () => {
        setState({
            data: null,
            isLoading: false,
            success: false,
            message: '',
        })
    }
    const insertData = (data) => {
        setState({
            data,
            message: 'Thành công',
            success: true,
            isLoading: false
        });
    }
    return {
        [nameState]: {
            ...state,
            query,
            clear,
            insertData
        }
    }
};
const useSelectGlobalState = (nameState) => {
    const storeContext = useContext(StoreContext);
    return storeContext[nameState];
}
export {
    useCreateStateContext,
    useSelectGlobalState
}