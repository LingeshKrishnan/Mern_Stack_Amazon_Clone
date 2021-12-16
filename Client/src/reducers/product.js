export default (product = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...product, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        default :
            return product;
    }
}
