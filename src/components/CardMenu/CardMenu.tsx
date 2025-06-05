import { type FC, type HTMLAttributes } from 'react';
import document from "./../../svg/document.svg";
import chevronRight from "./../../svg/chevron-right.svg";
import styles from './CardMenu.module.css';

interface CardMenuProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CardMenu: FC<CardMenuProps> = (props) => {
  const { label, ...rest } = props;

  return (
    <button type="button" className={styles.cardMenu} {...rest}>
      <img src={document} />
      <div>{label}</div>
      <img src={chevronRight} />
    </button>
  );
};

export default CardMenu;
