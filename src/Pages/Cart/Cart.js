/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { message, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import { getTotalAmount, getTotalQuantity } from './priceHelper';
import { GoTo } from '../../Components';
import { cakeActions, homeActions } from '../../Redux/Actions';

const Cart = ({ cart }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = useSelector((state) => state.firebase.auth);
  if (!uid) {
    return <Redirect to="/login" />;
  }
  const totalPrice = getTotalAmount(cart);

  const removeFromKart = (cake) => {
    dispatch(cakeActions.removeCakeFromCart(uid, cake.cakeId));
    dispatch(cakeActions.setToDefault());
    dispatch(homeActions.startReload());
  };
  const Columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Item Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (item) => (
        <div style={{ cursor: 'pointer' }}>
          <MdCancel onClick={() => removeFromKart(item)} color="#ec524b" size={14} />
        </div>
      ),
    },
  ];

  const payNow = () => {
    dispatch(cakeActions.paymentDone(6));
    message
      .loading('Packing Your cake...', 1.5)
      .then(() => message.loading('Redirecting you to status page', 1.5));
    setTimeout(() => history.push('/status'), 3000);
  };
  const totalQuantity = getTotalQuantity(cart);

  return (
    <div>
      <GoTo position="topLeft" color="#000" />
      <Container>
        <CartContainer>
          <CardHeader>
            <HeaderText>Total Items: {totalQuantity}</HeaderText>
          </CardHeader>
          <CardContent>
            <Table
              pagination={false}
              rowKey={(item) => item.cakeId}
              columns={Columns}
              dataSource={cart}
              size="small"
            />
          </CardContent>
          <CardFooter>
            <div />
            <PaymentContainer>
              <PaymentAlignment>
                <div>
                  <PaymentText className="medium">${totalPrice}</PaymentText>
                </div>
                <div>
                  <Button onClick={payNow} className="boldItalic" type="button">
                    Pay now
                  </Button>
                </div>
              </PaymentAlignment>
            </PaymentContainer>
          </CardFooter>
        </CartContainer>
      </Container>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    length: PropTypes.any,
  }).isRequired,
};

export default Cart;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartContainer = styled.div`
  background-color: #fff;
  height: 85%;
  width: 75%;
  padding: 40px;
  position: relative;
`;
const CardHeader = styled.div`
  height: 100px;
  width: 100%;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardContent = styled.div`
  height: 80%;
  width: 100%;
`;

const HeaderText = styled.p`
  font-family: 'Steradian Bold', sans-serif;
  font-size: 40px;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaymentContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 40px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PaymentText = styled.p`
  font-size: 40px;
  letter-spacing: 1px;
  margin-bottom: -4px;
  margin-right: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: #f05454;
  height: 50px;
  width: 150px;
  padding: 10px;
  margin: 10px;
  font-size: 25px;
  color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 0 8px 30px -10px #f05454;
  }
`;

const PaymentAlignment = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
