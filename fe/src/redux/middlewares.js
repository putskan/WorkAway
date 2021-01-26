import axios from 'axios'
import * as constants from './constants'

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== constants.API) return next(action);
    const BASE_URL = 'http://localhost:9000'
    const { url, method, success, data, postProcessSuccess, postProcessError } = action.payload;

    axios({
        method,
        url: BASE_URL + url,
        data: data ? data : null
    }).then((response) => {
        if (success) dispatch(success(response.data));
        if (postProcessSuccess) postProcessSuccess(response.data);
    }).catch(err => {
        console.log(Object.keys(err));
        console.log(err.response)
        if (!err.response) console.warn(err);
        else {
            if (err.response.data) {
                if(postProcessError) postProcessError(err.response.data);
            }
        }
    })

};