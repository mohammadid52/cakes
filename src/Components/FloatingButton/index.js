import React from 'react';
import './style.css';
import { BiCart } from 'react-icons/bi';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Index = ({ number, iconSize, ...rest }) => {
  const { cardVisible } = useSelector((state) => state.cake);

  return (
    <div className="floating__button-container">
      <span className="fixed-button">
        <button type="button" className="floating__button" {...rest}>
          <span>
            <Badge
              count={number}
              dot={!!cardVisible}
              style={{ backgroundColor: '#BDF2EE', color: '#000' }}
            >
              <BiCart size={iconSize} />
            </Badge>
          </span>
        </button>
      </span>
    </div>
  );
};

Index.propTypes = {
  number: PropTypes.number.isRequired,
  iconSize: PropTypes.number.isRequired,
};

export default Index;
