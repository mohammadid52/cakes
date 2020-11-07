/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './styles.css';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cakeActions, homeActions } from '../../Redux/Actions';

const CartContent = ({ cart }) => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const { reloading } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const history = useHistory();

  const removeFromKart = (cakeId) => {
    dispatch(cakeActions.removeCakeFromCart(uid, cakeId));
    dispatch(cakeActions.setToDefault());
    dispatch(homeActions.startReload());
  };
  const [showCancel, setShowCancel] = useState(false);
  const shouldReload = !!reloading;
  useEffect(() => {
    dispatch(homeActions.stopReload());
  }, [shouldReload, dispatch]);
  const goToCart = () => {
    history.push('/cart');
  };
  const quantity = cart.quantity > 1 ? `(${cart.quantity})` : null;
  return (
    <>
      <MenuContainer
        onMouseOver={() => setShowCancel(true)}
        onMouseLeave={() => setShowCancel(false)}
      >
        <ListContainer>
          <div>
            <MenuItem onClick={goToCart}>
              {cart && cart.name} {quantity}
            </MenuItem>
          </div>
          {showCancel ? (
            <div>
              <CancelButton onClick={() => removeFromKart(cart.cakeId)} color="#ec524b" size={14} />
            </div>
          ) : null}
        </ListContainer>
      </MenuContainer>
    </>
  );
};
export default CartContent;

const MenuContainer = styled.div`
  width: 200px;
  cursor: pointer;
  position: relative;
`;
const MenuItem = styled.p`
  margin-right: 5px;
  color: #000;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

const CancelButton = styled(MdCancel)`
  :hover {
    color: #ec524b;
  }
`;

CartContent.propTypes = {
  cart: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    cakeId: PropTypes.string,
    length: PropTypes.any,
  }).isRequired,
};
