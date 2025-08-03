import type { Meta } from "@storybook/react-vite";
import { ErrorPage } from "./ErrorPage";

const meta = {
    title: "ErrorPage",
    component: ErrorPage,
} satisfies Meta<typeof ErrorPage>

export default meta;

export const Base = {
    args: {
        message: "Hubo Un error",
        buttonLabel: "Volver a intentar",
        onClickErrorPresentation: (label: string) => {
            alert(`El label del botón ${label}`)
        }
    }
}