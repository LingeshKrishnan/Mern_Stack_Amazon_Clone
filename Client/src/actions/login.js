import * as api from '../api'

export const getLogin = () => async(dispatch) => {
    try {
        const { data } = await api.fetchLogins();
        dispatch ({ type: 'FETCH', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
    const action = { type: 'CREATE', payload: [] }
    return action;
}
export const createLogin = (login) => async(dispatch) => {
    try {
        const { data } = await api.createLogin(login);
        dispatch ({ type: 'CREATE', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
    const action = { type: 'CREATE', payload: [] }
    return action;
}

