import React from 'react';
import { isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Loading from '../../Components/LoadingPage';

export default ({ children }) => {
  const { auth } = useSelector((state) => state.firebase);

  if (!isLoaded(auth)) {
    return <Loading text="Baking Cakes..." />;
  }
  return children;
};
