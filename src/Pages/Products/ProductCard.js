import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Text } from '../../Components';
import './Products.css';
import { cakeActions } from '../../Redux/Actions';

const ProductCard = ({ data }) => {
  const { uid } = useSelector((state) => state.firebase.auth);

  const dispatch = useDispatch();
  const [text, setText] = useState('Add to cart');

  const history = useHistory();

  const add2Cart = () => {
    dispatch(cakeActions.addCakeToCart(uid, data));
    dispatch(cakeActions.showCart());
    setText('Added to cart');
    setInterval(() => setText('Add to cart'), 100);
  };

  const func = () => history.push('/login');
  const action = !uid ? func : add2Cart;
  return (
    <div className="prod animate__animated animate__fadeIn">
      <div className="product__header">
        <Text color="#fff" weight="medium" size="large">
          {data.name}
        </Text>
        <div className="image__container">
          <img className="product__image" src={data.img} alt="cake img" />
        </div>
        <div className="product__footer">
          <div className="product__price-container">
            <p className="product__price">{data.price}</p>
          </div>
          <div className="buy_now" onClick={action}>
            <div className="buy_now-container">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.any,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
