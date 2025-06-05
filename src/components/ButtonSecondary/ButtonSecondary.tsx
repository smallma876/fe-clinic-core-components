import clsx from "clsx";
import type { FC } from "react";
import styles from "./ButtonSecondary.module.css";
import baseStyles  from "./../../shared/Button/button.module.css";

interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = (props) => {
  const { children, ...rest } = props;

  const className = clsx(
    baseStyles.btnBase,
    styles.neutral,
  )

  return (
    <button className={className} type="button" {...rest}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
