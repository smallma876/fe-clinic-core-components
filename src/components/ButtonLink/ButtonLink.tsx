import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx'; // Utility to combine classes conditionally

// Define the properties of the ButtonLink component
// Now extends ButtonHTMLAttributes for a <button> element
export interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; // The content of the link (e.g., "Forgot password?")
    // The 'href' prop is removed as it's a button, not an anchor.
    // Actions will typically be handled via 'onClick'.
}

export const ButtonLink: FC<ButtonLinkProps> = ({
    children,   
    className: additionalClassName = '', // To allow additional classes from the parent
    ...rest
}) => {
    // Define the Tailwind CSS classes for the button, making it look like a text link
    const linkClasses = clsx(
        "text-sm", // Small font size
        "text-blue-600", // Blue color to indicate it's a link (adjust to gray-600 if image color is preferred)
        "bg-transparent", // No background color
        "border-none", // No border
        "p-0", // No padding
        "cursor-pointer", // Cursor indicates it's clickable
        "hover:underline", // Underline on hover
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50", // Focus style
        "transition-colors duration-200 ease-in-out", // Smooth transition for color and underline
        "inline-block", // Ensures it behaves like an inline block for proper sizing and alignment
        additionalClassName // Additional classes passed by the parent
    );

    return (
        <button
            type="button" // Set type to "button" to prevent default form submission
            className={linkClasses}
            {...rest} // Passes any other HTML properties to the button (onClick, disabled, etc.)
        >
            {children}
        </button>
    );
};
