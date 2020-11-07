import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

const GoTo = ({ position, color, ...rest }) => {
  const history = useHistory();

  const Component =
    position === 'topLeft' || position === 'bottomLeft' ? BiArrowBack : BsArrowRight;
  return (
    <div className={position} onClick={() => history.goBack()} {...rest}>
      <Component color={color} size={26} />
    </div>
  );
};

GoTo.propTypes = {
  position: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default GoTo;
