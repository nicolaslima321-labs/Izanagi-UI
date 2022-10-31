import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgInput = ({ placeholder, primary, backgroundColor, size, label, ...props }) => {
  return (
    <input
      class="izg-input"
      type="text"
      placeholder={placeholder}
      {...props}
    />
  );
};

IzgInput.propTypes = {
  /**
   * Optional change handler
   */
  placeholder: PropTypes.string,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
  /**
   * Optional Blur handler
   */
   onBlur: PropTypes.func,
};

IzgInput.defaultProps = {
  placeholder: 'Your place holder',
  onChange: undefined,
  onBlur: undefined,
};
