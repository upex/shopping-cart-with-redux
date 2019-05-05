import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../store/actions/shoppingCartActions'
import CartItem from './CartItem'
import Grid from '@material-ui/core/Grid';

class Carts extends Component {
  handleProductSelect = (product) => {
    console.log('Cart product=>', product);
  }  
  render() {
    const cartList =  this.props.cart.map((item, index) => {
        return <CartItem
        key={item.id} product={item}
        handleProductSelect={this.handleProductSelect}
        addProductToCart={this.props.addProductToCart}
        removeProductFromCart={this.props.removeProductFromCart}
        />
    });
    return (
      <Grid container spacing={24}>
        {cartList}
      </Grid>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart.cart
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (item) => {
      dispatch(addProductToCart(item));
    },
    removeProductFromCart: (itemId) => {
      dispatch(removeProductFromCart(itemId));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Carts)