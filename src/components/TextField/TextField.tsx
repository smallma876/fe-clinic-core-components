import { type ChangeEvent, type FC, type InputHTMLAttributes, type ReactNode, useState } from 'react';
import clsx from 'clsx'; // Importa clsx para organizar las clases

// Define la interfaz para el mensaje de error de la UI
export interface ErrorUIField {
  message: string;
  // Puedes añadir otros campos si tu estructura de error es más compleja,
  // por ejemplo, 'code' o 'type'
}

// Define las propiedades del componente TextField
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: ErrorUIField; // Objeto de error opcional
  label?: string; // Etiqueta del campo de texto
  value?: string; // Valor controlado del input
  defaultValue?: string; // Valor inicial no controlado
  icon?: ReactNode; // Icono opcional a mostrar dentro del input
}

export const TextField: FC<TextFieldProps> = ({
  label,
  id,
  value,
  onChange,
  error,
  defaultValue = '',
  icon, // Propiedad para el icono
  className: additionalClassName = '', // Para permitir clases adicionales desde el padre
  ...rest
}) => {
  // Determina si el componente es controlado (valor gestionado por el padre)
  const isControlled = value !== undefined;
  // Estado interno para el valor si el componente no es controlado
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Manejador de cambios para el input
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!isControlled) {
      // Actualiza el estado interno si no es un componente controlado
      setInternalValue(event.target.value);
    }
    if (onChange) {
      // Llama a la función onChange proporcionada por el padre
      onChange(event);
    }
  };

  // Organiza las clases de Tailwind CSS usando clsx
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
    // Contenedor principal del campo de texto
    <div className="flex flex-col w-full mb-8">
      {/* Etiqueta del campo de texto, solo se muestra si existe */}
      {label && (
        <label htmlFor={id} className="text-gray-700 text-sm font-medium mb-1">
          {label}
        </label>
      )}

      {/* Contenedor del input y el icono */}
      <div className="relative flex items-center">
        {/* Icono, solo se muestra si existe */}
        {icon && (
          <div className="absolute left-3 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}
        {/* Campo de input real */}
        <input
          id={id}
          type="text" // Tipo de input, puede ser sobrescrito por 'rest'
          className={inputClasses} // Aplica las clases organizadas por clsx
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          {...rest} // Propiedades restantes (placeholder, name, etc.)
        />
      </div>

      {/* Mensaje de error, solo se muestra si existe */}
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};
