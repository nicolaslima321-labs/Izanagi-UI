import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgText = ({ text, variant, ...props }) => {
  const textElement = () => {
    switch (variant) {
      case 'strong':
        return <strong {...props}>{text}</strong>;
      case 'p':
        return <p {...props}>{text}</p>;
      case 'label':
      default:
        return <label {...props}>{text}</label>;
    }
  }

  return (
    <>
      { textElement() }
    </>
  );
};

IzgText.propTypes = {
  /**
   * Required text prop
   */
  text: PropTypes.string,
  /**
   * Required variant prop
   */
  variant: PropTypes.string,
};

IzgText.defaultProps = {};
