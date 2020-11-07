import React from 'react';
import './Text.css';

const Text = ({ children, size, weight, color, ...rest }) => (
  <p className={`text ${size} ${weight}`} style={{ color }} {...rest}>
    {children}
  </p>
);

export default Text;
