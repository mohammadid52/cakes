import React from 'react';
import './Home.css';
import { Text } from '../../Components';

const LeftSide = () => (
  <div className="left__text">
    <div style={{ marginBottom: -40 }}>
      <Text size="extraLarge" color="#383838" weight="bold">
        Cake
      </Text>
    </div>
    <div>
      <Text size="extraLarge" color="#383838" weight="bold">
        Your Day
      </Text>
    </div>
    <div style={{ marginTop: 40, width: '100%' }}>
      <Text color="#8D8D8D">
        For our desserts we always use only the natural ingredients. Our production is 100%
        handmade.
      </Text>
    </div>
  </div>
);

export default LeftSide;
