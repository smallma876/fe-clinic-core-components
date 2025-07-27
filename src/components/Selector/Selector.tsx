import type { ErrorUIField } from '@/domain/error.interface';
import clsx from 'clsx';
import { type FC, type ReactNode, type SelectHTMLAttributes } from 'react';

export interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  value?: string;
  error?: ErrorUIField;
  label?: string;
  icon?: ReactNode; // Icono opcional a mostrar dentro del input
}

export const Selector: FC<SelectorProps> = ({ icon, label, id, value, children, error, className: additionalClassName = '', ...rest }) => {

  const inputClasses = clsx(
    "w-full",
    "py-2",
    "px-3",
    "bg-white",
    "focus:outline-none",
    "focus:border-blue-500",
    "focus:border-b-2", // El borde inferior se vuelve azul y más grueso al enfocar
    "transition",
    "duration-200",
    "ease-in-out",
    "border-t-0",
    "border-l-0",
    "border-r-0",
    "border-b", // Solo borde inferior

    // Clases condicionales
    {
      'pl-9': icon, // Ajusta el padding-left si hay un icono
      'pl-3': !icon, // Padding normal si no hay icono
      'border-red-500': error, // Borde rojo si hay error
      'border-gray-300': !error, // Borde gris si no hay error
    },
    additionalClassName // Clases adicionales pasadas por el padre
  );

  return (
    <div className="flex flex-col w-full mb-8">
      {label && (
        <label htmlFor={id} className="text-gray-700 text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <select
        className={inputClasses}
        value={value}
        id={id}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};
