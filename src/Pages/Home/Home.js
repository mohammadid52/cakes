import React from 'react';
import './Home.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import HomeActions from './HomeActions';

const home = () => (
  <>
    <div className="left">
      <LeftSide />
    </div>
    <div className="right">
      <RightSide />
    </div>
    <div className="home__actions">
      <HomeActions />
    </div>
  </>
);

export default home;
