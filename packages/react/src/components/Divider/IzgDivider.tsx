import React from 'react';

import styles from '~/components/Divider/IzgDivider.module.scss';

interface props {
  className: string,
};

export const IzgDivider: React.FC<props> = ({ className }) => {
  const classNames = `${styles['hr']} ${className}`

  return <hr className={classNames} />;
};
