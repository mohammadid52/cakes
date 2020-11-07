import { Popover } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { cakeActions } from '../../Redux/Actions';
import Content from './CartContent';
import { getTotalQuantity } from '../../Pages/Cart/priceHelper';

const Index = ({ children, cart }) => {
  const { cardVisible } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(cakeActions.showCart());
  };
  const hideCart = () => {
    dispatch(cakeActions.hideCart());
  };
  const CardData = map(cart, (cartItems) => <Content cart={cartItems} />);
  const popoverActions = cardVisible ? hideCart : showCart;
  const totalQuantity = getTotalQuantity(cart);
  return (
    <Popover
      content={CardData}
      title={`Total items: ${totalQuantity}`}
      trigger="click"
      visible={cardVisible}
      placement="topRight"
      onVisibleChange={popoverActions}
    >
      {children}
    </Popover>
  );
};
Index.propTypes = {
  cart: PropTypes.shape({
    length: PropTypes.any,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default Index;
