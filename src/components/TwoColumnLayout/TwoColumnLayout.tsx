import { type FC, type ReactNode } from 'react';
import clsx from 'clsx';

export interface TwoColumnLayoutProps {
    leftContent: ReactNode; // Contenido para el lado izquierdo (ej. el formulario)
    rightContent: ReactNode; // Contenido para el lado derecho (ej. la imagen/texto)
    rightContentClassName?: string; // Clases adicionales para el contenedor del lado derecho
    leftContentClassName?: string; // Clases adicionales para el contenedor del lado izquierdo
    containerClassName?: string; // Clases adicionales para el contenedor principal
}

export const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({
    leftContent,
    rightContent,
    rightContentClassName = '',
    leftContentClassName = '',
    containerClassName = '',
}) => {
    return (
        // Contenedor principal del layout
        // Usamos flexbox para el diseño de columnas
        // md:flex-row para que sean filas en pantallas medianas y grandes
        // flex-col para que sean columnas (apiladas) en pantallas pequeñas (móviles)
        // h-screen para ocupar toda la altura de la pantalla
        // items-center y justify-center para centrar el contenido
        <div className={clsx("flex flex-col md:flex-row h-screen w-full items-center justify-center bg-gray-100", containerClassName)}>

            {/* Lado Izquierdo: Formulario */}
            {/* En pantallas medianas y grandes, ocupa la mitad del ancho (md:w-1/2) */}
            {/* En pantallas pequeñas, ocupa todo el ancho (w-full) */}
            {/* Añadimos padding para que el contenido no esté pegado a los bordes */}
            <div className={clsx("w-full md:w-1/2 lg:w-2/5 flex justify-center items-center p-4", leftContentClassName)}>
                {leftContent}
            </div>

            {/* Lado Derecho: Contenido (Imagen/Texto) */}
            {/* Se oculta en pantallas pequeñas (hidden) */}
            {/* Se muestra en pantallas medianas y grandes (md:block) */}
            {/* Ocupa la otra mitad del ancho en md:w-1/2, y un poco más en lg:w-3/5 */}
            {/* Añadimos estilos para el fondo y para centrar el contenido */}
            <div className={clsx(
                "hidden md:block md:w-1/2 lg:w-3/5", // Oculto en móvil, visible en md y lg
                "h-full", // Ocupa toda la altura disponible
                "bg-gradient-to-br from-purple-500 to-indigo-700", // Degradado de fondo para el lado derecho
                "flex items-center justify-center text-white p-4", // Centra el texto y añade padding
                rightContentClassName
            )}>
                {rightContent}
            </div>
        </div>
    );
};
