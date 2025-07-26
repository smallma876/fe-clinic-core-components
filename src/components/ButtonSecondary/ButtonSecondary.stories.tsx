import type { Meta } from "@storybook/react-vite";
import { ButtonSecondary } from "./ButtonSecondary";

const meta = {
    title: "ButtonSecondary",
    component: ButtonSecondary,
} satisfies Meta<typeof ButtonSecondary>

export default meta;

export const Base = {
    args: {
        children: "Boton secundario",
    }
}