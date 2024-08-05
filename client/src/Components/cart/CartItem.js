import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import addEllipsis from '../../utils/common-utils';
import GroupedButton from './ButtonGroup';
import { removeFromCart } from '../../Redux/actions/cartAction';
import { useDispatch } from 'react-redux';


const Component = styled(Box)`
    border-top : 1px solid #f0f0f0;
    display : flex;
     
`;

const LeftComponent = styled(Box)`
    margin : 20px;
    display : flex;
    flex-direction : column;
`;

const SmallText = styled(Box)`
    color : #878787;
    font-size : 14px;
    margin-top : 10px;
`;

const Remove = styled(Button)`
  margin-top : 20px;
  font-size : 16px;
  color : #000;
  font-weight : 600;
`

function CartItem({item}) {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Component>
        <LeftComponent>
            <img src={item.url} alt='product' style={{height:110, width:110}} />
            <GroupedButton/>
        </LeftComponent>
        <Box style={{margin :'20px'}}>
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <SmallText>Seller:RetailNet
                <Box component='span'><img src={fassured} alt='flipcart' style={{width:50, marginLeft:10}} /></Box>  
           </SmallText>
           <Typography style={{margin : '20px 0'}}>
                <span style={{ fontWeight: 600, fontSize:18 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                <span style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
            </Typography>
            <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
    </Component>
  );
}

export default CartItem;
