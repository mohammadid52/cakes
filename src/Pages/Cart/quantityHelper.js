import { replace } from 'lodash';

const cartMultiplier = (cart) => {
  const finalizedArr = [];
  cart.forEach((d) => {
    const item = d;
    if (!item) return null;
    if (!item?.quantity) {
      item.quantity = 1;
    }
    const index = finalizedArr.map((e) => e.name).indexOf(item.name);
    if (index === -1) {
      finalizedArr.push(item);
    } else {
      finalizedArr[index] = { ...finalizedArr[index], quantity: finalizedArr[index].quantity + 1 };
    }
  });

  return finalizedArr.map((d) => ({
    ...d,
    totalPrice: `$${parseFloat(replace(d.price, '$', ''), 10) * d.quantity}`,
  }));
};
export default cartMultiplier;
