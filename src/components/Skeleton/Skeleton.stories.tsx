import type { Meta } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta = {
    title: "Skeleton",
    component: Skeleton,
} satisfies Meta<typeof Skeleton>

export default meta;

export const Base = {
    args: {

    }
}

export const Custom = {
    args: {
        height: "50px",
        width: "100px"
    }
}