export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';
export const GET_USER = 'GET_USER';

export const getUsers = () => {
  return dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(res => dispatch({ type: "GET_USER", payload: res})
    )}
}
export const addProductToCart = product => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 700);
  };
};

export const removeProductFromCart = productId => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: REMOVE_PRODUCT_FROM_CART,
          payload: productId
        });
      }, 700);
    };
  };