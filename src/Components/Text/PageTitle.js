import React from 'react';
import './Text.css';

const PageTitle = ({ children, ...rest }) => (
  <p className="pageTitle large bold" {...rest}>
    {children}
  </p>
);

export default PageTitle;
