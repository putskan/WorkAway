import axios from 'axios'
import * as constants from './constants'
import { serverBaseUrl } from '../variables/network'

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== constants.API) return next(action);
    const { url, method, success, data, postProcessSuccess, postProcessError } = action.payload;

    axios({
        method,
        url: serverBaseUrl + url,
        data: data ? data : null
    }).then((response) => {
        if (success) dispatch(success(response.data));
        if (postProcessSuccess) postProcessSuccess(response.data);
    }).catch(err => {
        if (!err.response) console.warn(err);
        else {
            if (err.response.data) {
                if(postProcessError) postProcessError(err.response.data);
            }
        }
    })
};