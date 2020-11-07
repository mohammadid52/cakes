import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../Redux/Actions';
import { GoTo } from '../../../Components';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const register = () => {
    const form = { username, email, password };
    dispatch(authActions.register(form));
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
            <p>Register</p>
          </div>
          <div className="form__container">
            <div className="field">
              <input
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
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
            <button type="submit" onClick={register} className="submit__btn loading">
              Register
            </button>
            <div className="footer">
              <p />
              <Link className="goToPage" to="/login">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
