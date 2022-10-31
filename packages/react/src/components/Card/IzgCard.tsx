import React from 'react';
import PropTypes from 'prop-types';
import './izg-card.scss';

/**
 * Primary UI component for user interaction
 */
export const IzgCard = ({ borderless, hoverless, slot, ...props }) => {
  return (
    <div
      class="izg-card"
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
  placeholder: 'Your place holder',
  onClick: undefined,
};
