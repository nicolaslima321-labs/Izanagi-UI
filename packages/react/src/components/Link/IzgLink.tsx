import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgLink = ({ text, ...props }) => {
  return (
    <a
      class="izg-link"
      {...props}
    >
      { text }
    </a>
  );
};

IzgLink.propTypes = {
  /**
   * Required text prop
   */
  text: PropTypes.string,
};

IzgLink.defaultProps = {};
