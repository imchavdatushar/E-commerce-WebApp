import {Box, Button, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';


const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      padding: '15px 0'
  }
}));

const Header = styled(Box)`
  padding : 15px 24px;
  background : #fff;
`;

const ButtonWraper = styled(Box)`
  display : flex;
  padding : 16px 22px;
  background : #fff;
  box-shadow : 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top : 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display : flex;
  margin-left : auto;
  background : #fb641b;
  color : #fff;
  width : 250px;
  height : 51px;
  border-radius : 2px;
`;

const LeftComponent = styled(Grid)(({theme}) => ({
   paddingRight : 15,
  [theme.breakpoints.down('sm')] : {
    marginBottom : 15,
  }
}))
  


function Cart() {
     const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
  return (
    <>
      {
        cartItems.length ?
          <Component container>
              <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography>My Cart ({cartItems.length})</Typography>
                </Header>
                {
                    cartItems.map(item => (
                      <CartItem item={item}/>
                    ))
                }
                <ButtonWraper>
                      <StyledButton>Place Order</StyledButton>
                      <Link to='/'><StyledButton style={{marginLeft : 10, textDecoration:'none'}}>Continue Shoping</StyledButton></Link>
                </ButtonWraper>
              </LeftComponent>
              <Grid  item lg={3} md={3} sm={12} xs={12}>
                  <TotalBalance cartItems={cartItems} />
              </Grid>
          </Component>
      
        : <EmptyCart/>
      
      }
    </>
  );
}

export default Cart;
