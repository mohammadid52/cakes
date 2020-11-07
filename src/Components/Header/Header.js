import React, { useState } from 'react';
import './Header.module.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authActions, cakeActions } from '../../Redux/Actions';

const MyHeader = () => {
  const [position, setPosition] = useState(1);
  const dispatch = useDispatch();
  useScrollPosition(({ prevPos, currPos }) => {
    const posChanged = currPos.y > prevPos.y;
    if (posChanged) {
      setPosition(currPos.y);
    } else {
      setPosition(0);
    }
    dispatch(cakeActions.hideCart());
  });

  const { uid } = useSelector((state) => state.firebase.auth);
  const { currentStep } = useSelector((state) => state.step);

  const isVisible = position < 1 ? 'none' : null;

  const history = useHistory();

  return (
    <Header>
      <div className="header__logo" />
      <div className="header__menu">
        <MenuContainer style={{ display: isVisible }}>
          <MenuList>
            <LinkTag href="#products">Products</LinkTag>
          </MenuList>
          {uid ? (
            <>
              <MenuList onClick={() => history.push('/cart')}>Cart</MenuList>
              {currentStep > 0 ? (
                <MenuList onClick={() => history.push('/status')}>Status</MenuList>
              ) : null}

              <MenuList className="logout" onClick={() => dispatch(authActions.logOut())}>
                Logout
              </MenuList>
            </>
          ) : (
            <MenuList onClick={() => history.push('/login')}>Login</MenuList>
          )}
        </MenuContainer>
      </div>
    </Header>
  );
};
const Header = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  position: fixed;
  top: 0;
  right: 20px;
`;

const MenuContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;
const MenuList = styled.li`
  margin-left: 40px;
  color: #fff;
  font-size: 24px;
  padding: 20px;
  cursor: pointer;
  font-family: 'Steradian Medium', sans-serif;
  border-bottom: 4px solid transparent;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #fcf876;
    border-bottom: 4px solid #fcf876;
  }
`;
const LinkTag = styled.a`
  color: #fff;
  text-decoration: none;
  :hover {
    color: #fcf876;
    text-decoration: none;
  }
`;
export default MyHeader;
