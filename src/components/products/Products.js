import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../store/actions/shoppingCartActions'
import ProductItem from './ProductItem'
import Grid from '@material-ui/core/Grid';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.setState({
      products: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
      ]
    });
  }
  handleProductSelect = (product) => {
    console.log('product=>', product);
  }  
  render() {
    const productList =  this.state.products.map((item, index) => {
      return <ProductItem
      key={item.id} product={item}
      handleProductSelect={this.handleProductSelect}
      addProductToCart={this.props.addProductToCart}
        />
    });
    return (
      <Grid container spacing={24}>
        {productList}
      </Grid>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    // cart: state.shoppingCart
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (item) => {
      dispatch(addProductToCart(item));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)