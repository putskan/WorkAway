import * as constants from '../constants';

export const registerUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/api/user/register',
        data,
        success: (response) => (saveUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/api/user/login',
        data,
        success: (response) => (saveUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});


const saveUserInfo = (data) => {
    // const parsedToken = JSON.parse(atob(data['auth-token'].split('.')[1]));
    const userInfo = {
        userID: data['user'],
        token: data['token'],
        isLoggedIn: true
    };
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, userInfo };
};

