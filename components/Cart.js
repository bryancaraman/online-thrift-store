/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core'
import CartItem from './CartItem';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

  componentDidMount() {
    fetch('http://localhost:8000/v1/cartitems')
      .then(response => response.json())
      .then(data => this.setState({cartItems: data}))
  }

  deleteItem = (id) => {
    fetch(`http://localhost:8000/v1/cartitems/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          const newItems = this.state.cartItems.filter(i => i.id != id);
          this.setState({
            cartItems: newItems
          })
        } else {
          alert(`Failed to delete ${id} - ${response.status}`)
        }
      });
  }

  render() {
    const totalPrice = this.state.cartItems
      .map(item => item.quantity * item.price)
      .reduce((a, b) => a + b, 0)

    return (
      <div>
        <Grid container direction="column" spacing={3}>
          {this.state.cartItems.map(item =>
            <Grid item xs={6}>
              <CartItem
                product_id={item.product_id}
                name={item.name}
                id={item.id}
                price={item.price}
                quantity={item.quantity}
                onRemoveFromCart={this.deleteItem}
                />
            </Grid>
          )}
        </Grid>
        <div style={{"padding-top": "20px"}}>
          <Typography variant="h3">
            Total: ${totalPrice}
          </Typography>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Cart.defaultProps = {
  title: 'cart-solution',
  description: 'A gasket cart app'
};

export default Cart;
