import React from 'react';
import { Header } from '../../Components';
import blob from '../../Assets/blob.svg';
import cakeImg from '../../Assets/home.png';

const RightSide = () => (
  <>
    <Header />
    <img className="blob" src={blob} alt="Blob" />
    <img className="home__cake" src={cakeImg} alt="Cake" />
  </>
);

export default RightSide;
