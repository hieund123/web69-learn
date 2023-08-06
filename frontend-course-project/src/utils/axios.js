import axios from 'axios';

export const Method = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
}
// axios 
const createRequest = async (apiEnpoint, payload, method) => {
    /**
     * payload format {
     * body,
     * query,
     * 
     * // pending
     * params
     * headers?
     * }
     */
    return axios({
        method: method,
        url: apiEnpoint,
        data: payload.body,
        params: payload['query'],
        headers: payload.headers ? {
            ...payload.headers
        } : {}
    }).then((rs) => rs.data).catch((error) => error.response.data);
}

export {
    createRequest
}