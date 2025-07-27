import type { Meta } from "@storybook/react-vite";
import { TwoColumnLayout } from "./TwoColumnLayout";

const meta = {
    title: "TwoColumnLayout",
    component: TwoColumnLayout
} satisfies Meta<typeof TwoColumnLayout>

export default meta;

export const Base = {
    args: {
        leftContent: <p>Hola Mundo Izquierdo</p>,
        rightContent: <p>Hola Mundo Derecho</p>,
    }
}