import map from 'lodash/map';

const getTotalAmount = (cart) => {
  const priceChangeToNumber = map(cart, (item) => {
    const { price } = item;
    const replaced = price.replace('$', '');
    return parseFloat(replaced, 10);
  });

  const reducer = (prevValue, currValue) => prevValue + currValue;
  const arr = priceChangeToNumber;
  const totalPrice = arr.reduce(reducer, 0);
  return totalPrice.toFixed(2);
};

const getTotalQuantity = (cart) => {
  const reducer = (prevValue, currValue) => prevValue + currValue.quantity;

  const totalQuantity = cart.reduce(reducer, 0);
  return totalQuantity;
};

export { getTotalQuantity, getTotalAmount };
