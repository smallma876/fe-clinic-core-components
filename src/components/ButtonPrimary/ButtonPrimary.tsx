import type { FC } from "react";
import clsx from "clsx";
import { ButtonSpinner } from "../Spinner/Spinner";

export interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading: boolean;
}

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  children,
  isLoading = false,
  disabled = false, // Propiedad 'disabled' del HTMLButtonAttributes
  className: additionalClassName = '', // Para permitir clases adicionales desde el padre
  ...rest }) => {
  // Define las clases de Tailwind CSS para el botón
  const buttonClasses = clsx(
    "w-full", // Occupies full available width
    "py-3 px-6", // Vertical and horizontal padding for button size
    "rounded-full", // Fully rounded borders for a pill shape
    "text-white", // White text color
    "font-bold", // Bold text
    "uppercase", // Uppercase text
    "flex items-center justify-center", // Centers content (text or spinner)
    "relative", // For positioning the spinner if more complexity is needed

    // Background gradient (colors with 30% reduced intensity)
    "bg-gradient-to-r from-cyan-400 to-fuchsia-500", // Lighter, less intense colors
    "shadow-lg", // Subtle shadow for depth

    // Hover effects with less intense colors
    "hover:from-cyan-500 hover:to-fuchsia-600", // Slightly darker gradient on hover
    "hover:shadow-xl", // More pronounced shadow on hover

    // Smooth transitions for effects
    "transition-all duration-300 ease-in-out",

    // Removes default browser focus outline
    "focus:outline-none",

    // Styles for disabled or loading state and cursor
    {
      "opacity-50": disabled || isLoading, // Opacity for disabled/loading
      "cursor-not-allowed": disabled && !isLoading, // Cursor for truly disabled (not loading)
      "cursor-wait": isLoading, // Cursor for loading state
      "cursor-pointer": !disabled && !isLoading, // Cursor for enabled state
    },
    additionalClassName // Additional classes passed by the parent
  );

  return (
    <div className="flex flex-col w-full mb-8">
      <button
        className={buttonClasses}
        type="button" // Tipo de botón por defecto
        disabled={disabled || isLoading} // Deshabilita el botón si está cargando o deshabilitado
        {...rest} // Pasa cualquier otra propiedad HTML al botón (onClick, etc.)
      >
        {/* Muestra el spinner si está cargando, de lo contrario muestra el contenido del botón */}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <ButtonSpinner />
          </div>
        ) : (
          children
        )}
      </button>
    </div>
  );
};
