import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgTitle = ({ text, variant, ...props }) => {
  const title = () => {
    switch (variant) {
      case 'h1':
        return <h1 {...props}>{text}</h1>;
      case 'h2':
        return <h2 {...props}>{text}</h2>;
      case 'h3':
        return <h3 {...props}>{text}</h3>;
      case 'h4':
        return <h4 {...props}>{text}</h4>;
      case 'h5':
        return <h5 {...props}>{text}</h5>;
      case 'h6':
      default:
        return <h6 {...props}>{text}</h6>;
    }
  }

  return (
    <>
      { title() }
    </>
  );
};

IzgTitle.propTypes = {
  /**
   * Required text prop
   */
  text: PropTypes.string,
  /**
   * Required variant prop
   */
  variant: PropTypes.string,
};

IzgTitle.defaultProps = {};
