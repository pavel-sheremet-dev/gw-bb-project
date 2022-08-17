import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, className }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};

// import React from 'react';

// const Button = () => {
//   return null;
// };

export default Button;
