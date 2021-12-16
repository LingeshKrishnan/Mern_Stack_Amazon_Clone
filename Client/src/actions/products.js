import * as api from '../api'

export const getProduct = () => async(dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        dispatch ({ type: 'FETCH_ALL', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
    const action = { type: 'FETCH_ALL', payload: [] }
    return action;
}

export const createProduct = (product) => async(dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch ({ type: 'CREATE', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
    const action = { type: 'CREATE', payload: [] }
    return action;
}

export const addtoCart = () => async(dispatch) => {
    try {
        const { data } = await api.addtoCart();
        dispatch( { type: 'ADD_TO_CART', payload: data })
    }
    catch (error) {
        console.log(error.message);
    }
}