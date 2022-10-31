import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgCheckbox = ({ id, name, text, value, ...props }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        {...props}
      />

      { Boolean(text) && (
        <label
          class="izg-checkbox__text"
          for={id}
        >
          { text }
        </label>
      ) }
    </>
  );
};

IzgCheckbox.propTypes = {
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

IzgCheckbox.defaultProps = {};
