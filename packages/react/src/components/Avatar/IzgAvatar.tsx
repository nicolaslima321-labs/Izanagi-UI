import React from 'react';

import styles from '~/components/Avatar/IzgAvatar.module.scss';

interface props {
  image: {
    alt: string,
    source: any,
  },
  className?: string,
  size?: 'extra-small' | 'small' | 'regular' | 'large' | 'extra-large' | 'giant' | 'extra-giant',
};

export const IzgAvatar: React.FC<props> = ({ image, className, size = 'regular', ...props }) => {
  const classNames = `${styles['avatar']} ${className}`;
  const sizeMapper = {
    'extra-small': { height: 12, width: 12 },
    'small': { height: 16, width: 16 },
    'regular': { height: 24, width: 24 },
    'large': { height: 32, width: 32 },
    'extra-large': { height: 45, width: 45 },
    'giant': { height: 64, width: 64 },
    'extra-giant': { height: 128, width: 128 },
  };

  return <>
    <img
      className={classNames}
      alt={image.alt}
      src={image.source}
      unoptimized={true}
      {...sizeMapper[size]}
      {...props}
    />
  </>;
};
