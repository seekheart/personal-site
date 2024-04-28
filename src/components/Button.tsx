import {cva, VariantProps} from "class-variance-authority";
import {ComponentPropsWithoutRef} from "react";

const buttonStyles = cva('border-grayscale-600 rounded-md border font-semibold shadow-md',
    {
        variants: {
            intent: {
                primary: 'bg-primary-400 text-white hover:bg-primary-300',
                secondary: 'bg-primary-400 text-white hover:bg-primary-300',
                tertiary: 'border-greyscale-300 bg-transparent text-white opacity-80 hover:bg-greyscale-100',
            },
            size: {
                medium: 'px-6 py-4 text-base',
                large: 'px-10 py-8 text-lg shadow-lg',
                xlarge: 'px-16 py-10 text-xl shadow-xl'
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