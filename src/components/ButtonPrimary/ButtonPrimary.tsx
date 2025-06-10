import type { FC } from "react";
import styles from "./ButtonPrimary.module.css";
import baseStyles  from "./../../shared/Button/button.module.css";
import clsx from "clsx";
import ButtonSpinner from "../../shared/Button/Spinner";

export interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading: boolean;
}

enum ButtonPrimaryState {
  Disabled = 'disabled',
  Loading = 'loading',
  Neutral = 'neutral',
  Clicked = 'clicked'
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children, isLoading = false, disabled = false, ...rest }) => {
  const getButtonState = () => {
    if(disabled){
      return ButtonPrimaryState.Disabled;
    }
    if(isLoading){
      return ButtonPrimaryState.Loading;
    }
    return ButtonPrimaryState.Neutral;
  }

  const className = clsx(
    baseStyles.btnBase,
    styles[getButtonState()],
  )

  return (

    <button className={className} type="button" disabled={disabled || isLoading} {...rest}>
      {isLoading ? <div className="flex justify-center items-center">

        <ButtonSpinner />
   
        </div>: children}
      
    </button>

  );
};

export default ButtonPrimary;
