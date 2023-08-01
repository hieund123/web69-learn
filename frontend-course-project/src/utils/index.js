import { createRequest } from "./axios";

const createInitStoreContext = (nameState) => {
    return {
        [nameState]: {
            data: null,
            isLoading: false,
            success: false,
            message: '',
            query(payload) {
            },
            clear(){
                
            }
        }
    }
}
const createQueryApi = (apiEndpoint, method) => {
    return async (payload, state, setState) => {
        setState({
            ...state,
            isLoading: true
        });
        const response = await createRequest(apiEndpoint, payload, method);
        setState({
            ...state,
            ...response,
            isLoading: false
        });
    }
}
export {
    createInitStoreContext,
    createQueryApi
}