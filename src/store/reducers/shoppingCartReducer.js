import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, GET_USER } from '../actions/shoppingCartActions';
const initialState = {
  cart: [],
  users: []
};
const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        }
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem
      }
      return {...state, cart: updatedCart};
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      }
      updatedItem.quantity--;
      if(updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1)
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return {...state, cart : updatedCart}
    case GET_USER:
      return {...state, users : action.payload}
    default:
      return state;
  }
};

export default shopReducer