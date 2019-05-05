import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Euro from '@material-ui/icons/EuroSymbol';
import Add from '@material-ui/icons/AddCircle';
import Remove from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const cartItem = ({product, classes, addProductToCart, removeProductFromCart}) => {
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
            <IconButton className={classes.button} aria-label="Remove"
            onClick={()=> removeProductFromCart(product.id)}>
              <Remove />
            </IconButton>
            {product.quantity}
            <IconButton className={classes.button} aria-label="Add"
            onClick={()=> addProductToCart(product)}>
              <Add />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    )
};
cartItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(cartItem);
