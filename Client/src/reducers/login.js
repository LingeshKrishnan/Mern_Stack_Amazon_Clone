export default (login = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...login, action.payload];
        case 'LOGIN':
            return login;
        case 'FETCH':
            return action.payload;
        default :
            return login;

    }
}