
import { type ChangeEvent, type FC, type InputHTMLAttributes, useState } from 'react';
import type { ErrorUIField } from '@/domain/error.interface';
import clsx from 'clsx';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: ErrorUIField;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  id,
  onChange,
  checked,
  disabled,
  error,
  ...rest }) => {
  // Determina si el componente es controlado (el estado `checked` es pasado por props) o no.
  const isControlled = checked !== undefined;

  // Estado interno solo si el componente no es controlado.
  const [internalChecked, setInternalChecked] = useState<boolean>(false);

  /**
   * Maneja el evento de cambio del input.
   * Si no es controlado, actualiza su propio estado.
   * Siempre invoca la función `onChange` pasada por props.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  // El valor final del checkbox, ya sea del estado controlado o interno.
  const isChecked = isControlled ? checked : internalChecked;

  // Clases dinámicas para el contenedor del checkbox visual usando clsx.
  const boxClasses = clsx(
    'w-5 h-5 rounded border',
    'flex-shrink-0 flex items-center justify-center',
    'transition-all duration-200 ease-in-out',
    'peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-500',
    disabled && 'bg-slate-100 border-slate-300 cursor-not-allowed',
    !isChecked && !disabled && 'bg-white border-slate-400',
    isChecked && !disabled && 'bg-blue-600 border-blue-600', // Solo aplica si está marcado y no deshabilitado
    error && '!border-red-500 peer-focus:!ring-red-500', // Aplica si hay error
  );

  // Clases dinámicas para el texto del label usando clsx.
  const labelClasses = clsx(
    'select-none',
    disabled ? 'text-slate-400' : 'text-slate-700',
  );

  return (
    <div className="flex flex-col mb-8">
      <label
        htmlFor={id}
        className={`flex items-center space-x-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
      >
        {/* Contenedor para el input y el checkbox visual para alineación */}
        <div className="relative w-5 h-5">
          {/* Input real, oculto visualmente pero accesible */}
          <input
            id={id}
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            {...rest}
          />

          {/* Representación visual del checkbox */}
          <div className={boxClasses}>
            {/* Icono de check (palomita), visible solo cuando está marcado */}
            {isChecked && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Label de texto */}
        {label && <span className={labelClasses}>{label}</span>}
      </label>

      {/* Mensaje de error, visible si existe */}
      {error?.message && (
        <p className="mt-1 ml-8 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};
