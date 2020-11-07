import React, { useState } from 'react';
import '../style.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../Redux/Actions';
import { GoTo } from '../../../Components';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const login = () => {
    const form = { email, password };
    dispatch(authActions.login(form));
  };

  const { uid } = useSelector((state) => state.firebase.auth);
  if (uid) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="main">
        <GoTo func="back" position="topLeft" color="#1f6f8b" />
        <div className="main__card">
          <div className="card__header medium">
            <p>Login</p>
          </div>
          <div className="form__container">
            <div className="field">
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button onClick={login} type="submit" className="submit__btn">
              Login
            </button>
            <div className="footer" style={{ marginTop: 60 }}>
              <Link className="goToPage" to="/forgot-password">
                Forgot Password?
              </Link>
              <Link className="goToPage" to="/register">
                Don't have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
