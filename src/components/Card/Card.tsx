import React, { type FC } from 'react';
import clsx from 'clsx';

// Definimos los tipos de tarjeta (puedes expandirlos si necesitas más estilos)
export enum CardTypes {
  Primary = 'primary',
  // Puedes añadir más tipos como 'Secondary', 'Elevated', etc.
}

export interface CardProps {
  children: React.ReactNode;
  type?: CardTypes;
  className?: string; // Para permitir clases adicionales de Tailwind
}

export const Card: FC<CardProps> = ({ children, type = CardTypes.Primary, className = '' }) => {
  // Clases base para la tarjeta
  const baseCardClasses = "bg-white rounded-lg shadow-lg p-8"; // Fondo blanco, bordes redondeados, sombra y padding

  // Clases específicas para cada tipo de tarjeta (puedes personalizarlas)
  const typeClasses = {
    [CardTypes.Primary]: "border border-gray-200", // Borde sutil para el tipo primario
    // [CardTypes.Secondary]: "bg-gray-50", // Ejemplo de otro tipo
  };

  const combinedClasses = clsx(
    baseCardClasses,
    typeClasses[type],
    className // Añade clases pasadas desde el padre
  );

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};
