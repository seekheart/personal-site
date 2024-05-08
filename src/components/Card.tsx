import {cva, VariantProps} from "class-variance-authority";
import {ComponentPropsWithRef} from "react";

const cardStyles = cva("rounded-md border border-gray-300 bg-surface shadow-lg ring-gray-50",
{
        variants: {
            intent: {
                horizontal: 'flex',
                vertical: 'flex flex-col',
            },
        },
        defaultVariants: {
            intent: "horizontal"
        },
    }
);

interface CardProps extends ComponentPropsWithRef<"article">, VariantProps<typeof cardStyles> {}


export const Card = ({intent, className, children}: CardProps) => {
    return (
        <article className={cardStyles({intent, className})}>
            {children}
        </article>
    )
};