import {cva, VariantProps} from "class-variance-authority";
import {ComponentPropsWithRef} from "react";

const cardStyles = cva([
    "bg-white",
    "grow",
    "items-center",
    "rounded-md",
    "border",
    "border-gray-300",
    "shadow"
    ],
{
        variants: {
            intent: {
                horizontal: 'flex',
                vertical: 'flex flex-col'
            },
            size: {
                small: ["text-sm", "py-4", "px-8"],
                medium: ["text-base", "py-8", "px-12"],
                large: ["text-lg", "py-12", "px-16"],
                xlarge: ["text-xl", "py-16", "px-20"],
            },
        },
        defaultVariants: {
            intent: "horizontal",
            size: "medium",
        },
    }
);

interface CardProps extends ComponentPropsWithRef<"article">, VariantProps<typeof cardStyles> {}

export const Card = ({intent, size, className, children}: CardProps) => {
    return (
        <article className={cardStyles({intent, size, className})}>
            {children}
        </article>
    )
};