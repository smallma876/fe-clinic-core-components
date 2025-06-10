import React, { type FC } from 'react';
import styles from './card.module.css';
import { CardTypes } from './CardTypes.enum';
import clsx from 'clsx';

export interface CardProps {
  children: React.ReactNode;
  type?: CardTypes;
}

const Card: FC<CardProps> = ({ children, type = CardTypes.Primary }) => {
  const className =  clsx(styles.cardBase, styles[type])

  return <div className={className}>{children}</div>;
};

export default Card;
