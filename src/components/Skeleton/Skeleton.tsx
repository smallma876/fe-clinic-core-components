import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

export interface SkeletonProps {
    height: string;
    width: string;
}

export const Skeleton: FC<PropsWithChildren<SkeletonProps>> = ({ height = "30px", width = "100%" }) => {

    const className = clsx(
        "rounded",
        "animate-pulse",
        "bg-gray-200"
    )

    const style = {
        height,
        width,
    }

    return (
        <div className={className} style={style}></div>
    )
}
