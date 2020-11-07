import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { map, values } from 'lodash';
import { Tooltip } from 'antd';
import Home from '../Home/Home';
import Products from '../Products/Products';
import { Register, Login } from '../Auth';
import CartPage from '../Cart/Cart';
import StatusPage from '../Status/Status';
import { FloatingButton, Cart } from '../../Components';
import { cakeActions } from '../../Redux/Actions';
import quantityHelper from '../Cart/quantityHelper';

const App = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/cart`,
    storeAs: 'cart',
  });

  const cartItems = useSelector(({ firestore }) => firestore.data.cart);

  if (!cartItems) {
    dispatch(() => cakeActions.setToDefault());
  }
  const cart = map(values(cartItems), (item) => item);
  const cakeNumber = cart.length;

  const quantifiedCart = quantityHelper(cart);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <section className="home wrapper">
            <Home />
          </section>
          <section id="products" className="products wrapper">
            <Products cart={cart} />
          </section>
          {cakeNumber > 0 ? (
            <Tooltip title="show cart">
              <Cart cart={quantifiedCart}>
                <FloatingButton
                  iconSize={28}
                  number={cakeNumber}
                  onClick={() => dispatch(cakeActions.showCart())}
                />
              </Cart>
            </Tooltip>
          ) : null}
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/cart">
          <CartPage cart={quantifiedCart} />
        </Route>
        <Route path="/status">
          <StatusPage cart={quantifiedCart} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
