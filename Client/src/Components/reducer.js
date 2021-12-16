export const initialState = {
    cart: [],
};

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_BASKET':
           const index = state.cart.findIndex(
               (cartItem) => cartItem.id === action.id
           );
           let newCart = [...state.cart];

           if(index >= 0) {
               newCart.splice(index, 1);
           }
           else {
               console.warn(`Cant remove product (id: ${action.id} as it's not in basket`);
           }
           return {
               ...state,
               cart: newCart
           }
        default:
            return state;
    }
};

export default reducer;