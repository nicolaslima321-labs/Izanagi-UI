import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const IzgCard = ({ borderless, hoverless, slot, ...props }) => {
  const isClickable = typeof props.onClick === 'function';

  const izgCardClass = () => {
    const izgCardClasses = ['izg-card'];

    if (isClickable) {
      izgCardClasses.push('izg-card--clickable');
    }

    if (hoverless) {
      izgCardClasses.push('izg-card--hoverless');
    }

    if (borderless) {
      izgCardClasses.push('izg-card--borderless');
    }

    return izgCardClasses.join(' ');
  };

  return (
    <div
      class={izgCardClass()}
      {...props}
    >
      { slot }
    </div>
  );
};

IzgCard.propTypes = {
  /**
   * Optional border style option
   */
  borderless: PropTypes.bool,
  /**
   * Optional hover style option
   */
  hoverless: PropTypes.bool,
  /**
   * Required slot to render inside the card
   */
  slot: PropTypes.object,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

IzgCard.defaultProps = {
  borderless: false,
  hoverless: false,
  slot: 'foo bar',
  onClick: undefined,
};
