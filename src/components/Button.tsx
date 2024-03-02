import {cva, VariantProps} from "class-variance-authority";
import {ComponentPropsWithoutRef} from "react";

const buttonStyles = cva([
        'border',
        'border-gray-500',
        'rounded-md',
        'ring-blue-500',
        'shadow-md'
    ],
    {
        variants: {
            intent: {
                primary: 'text-white bg-primary-400 hover:bg-primary-300'
            },
            size: {
                medium: 'px-6 py-4 text-base',
                large: 'px-10 py-8 text-lg',
                xlarge: 'px-16 py-10 text-xl'
            }
        },
        defaultVariants: {
            intent: 'primary',
            size: 'medium'
        }
    }
);

interface ButtonProps extends ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonStyles> {
}

export const Button = ({intent, size, className, children, ...props}: ButtonProps) => {
    return (
        <button className={buttonStyles({intent, size, className})} {...props}>{children}</button>
    )
}