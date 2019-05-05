import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Euro from '@material-ui/icons/EuroSymbol';

const styles = {
  card: {
    textAlign: 'center'
  }
};

const ProductItem = ({product, classes, handleProductSelect, addProductToCart}) => {
    return (
      <Grid item xs={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
            {product.title}
            </Typography>
            <Typography variant="h5" component="h2">
            <Euro /> {product.price}
            </Typography>
            <Button variant="contained" color="primary"
            onClick={()=> addProductToCart(product)}>Add to Cart</Button>
          </CardContent>
        </Card>
      </Grid>
    )
};
ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProductItem);