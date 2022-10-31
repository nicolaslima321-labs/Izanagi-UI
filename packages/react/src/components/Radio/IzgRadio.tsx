import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgRadio = ({ id, name, text, value, ...props }) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        {...props}
      />

      { Boolean(text) && (
        <label
          class="izg-radio__text"
          for={id}
        >
          { text }
        </label>
      ) }
    </>
  );
};

IzgRadio.propTypes = {
  /**
   * Optional change handler
   */
  text: PropTypes.string,
  /**
   * Required id prop
   */
  id: PropTypes.string,
  /**
   * Required name prop
   */
  name: PropTypes.string,
  /**
   * Required value prop
   */
  value: PropTypes.string,
};

IzgRadio.defaultProps = {};
