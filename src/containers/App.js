import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import Product from '../components/products/Products';
import Cart from '../components/cart/Carts';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

const app = (props) => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <NavLink to="/" className="App-link">
            Product
          </NavLink>
          <IconButton color="inherit">
            <NavLink to="/cart" className="App-link">
              <Badge badgeContent={props.cartItems} color="secondary">
                <CartIcon />
              </Badge>
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.shoppingCart.cart ? state.shoppingCart.cart.reduce((count, currentItem)=>{
      return count + currentItem.quantity;
    }, 0) : 0
  };
}

export default connect(mapStateToProps)(app)
