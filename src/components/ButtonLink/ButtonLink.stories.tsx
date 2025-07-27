import type { Meta } from "@storybook/react-vite";
import { ButtonLink } from "./ButtonLink";

const meta = {
    title: 'ButtonLink',
    component: ButtonLink
} satisfies Meta<typeof ButtonLink>

export default meta;

export const Base = {
    args: {
        children: "Olvidaste la contraseña",
    }
}
