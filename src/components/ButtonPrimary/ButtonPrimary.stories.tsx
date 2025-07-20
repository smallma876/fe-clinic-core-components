import type { Meta } from "@storybook/react-vite";
import {ButtonPrimary} from "./ButtonPrimary"


const meta = {
    title: 'ButtonPrimary',
    component: ButtonPrimary,
} satisfies Meta<typeof ButtonPrimary>

export default meta;

export const Loading = {
    args: {
        children: "Boton loading",
        isLoading: true,
        disabled: false,
    }
}

export const Disabled = {
    args: {
        children: "Boton deshabilitado",
        isLoading: false,
        disabled: true,
        onClick: () => {
            console.log("hola mundo")
        }
    }
}

export const Base = {
    args: {
        children: "Boton primario"
    }
}