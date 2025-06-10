import type { Meta } from "@storybook/react-vite";
import CardMenu from "./CardMenu";

const meta = {
    title: "CardMenu",
    component: CardMenu,
}satisfies Meta<typeof CardMenu>

export default meta;

export const Base = {
    args: {
        label: "Hola Mundo"
    }
}