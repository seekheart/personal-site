import * as defaultTheme from "tailwindcss/defaultTheme";

export const PersonalPresetConfig = {
    theme: {
        extend:
            {
                colors: {
                    primary: {
                        100: 'hsl(var(--color-primary-100))',
                        200: 'hsl(var(--color-primary-200))',
                        300: 'hsl(var(--color-primary-300))',
                        400: 'hsl(var(--color-primary-400))',
                        500: 'hsl(var(--color-primary-500))',
                        600: 'hsl(var(--color-primary-600))',
                        700: 'hsl(var(--color-primary-700))',
                        800: 'hsl(var(--color-primary-800))',
                        900: 'hsl(var(--color-primary-900))',
                    },
                    secondary: {
                        100: 'hsl(var(--color-secondary-100))',
                        200: 'hsl(var(--color-secondary-200))',
                        300: 'hsl(var(--color-secondary-300))',
                        400: 'hsl(var(--color-secondary-400))',
                        500: 'hsl(var(--color-secondary-500))',
                        600: 'hsl(var(--color-secondary-600))',
                        700: 'hsl(var(--color-secondary-700))',
                        800: 'hsl(var(--color-secondary-800))',
                        900: 'hsl(var(--color-secondary-900))',
                    },
                    warning: {
                        100: 'hsl(var(--color-warning-100))',
                        200: 'hsl(var(--color-warning-200))',
                        300: 'hsl(var(--color-warning-300))',
                        400: 'hsl(var(--color-warning-400))',
                        500: 'hsl(var(--color-warning-500))',
                        600: 'hsl(var(--color-warning-600))',
                        700: 'hsl(var(--color-warning-700))',
                        800: 'hsl(var(--color-warning-800))',
                        900: 'hsl(var(--color-warning-900))',
                    },
                    danger: {
                        100: 'hsl(var(--color-danger-100))',
                        200: 'hsl(var(--color-danger-200))',
                        300: 'hsl(var(--color-danger-300))',
                        400: 'hsl(var(--color-danger-400))',
                        500: 'hsl(var(--color-danger-500))',
                        600: 'hsl(var(--color-danger-600))',
                        700: 'hsl(var(--color-danger-700))',
                        800: 'hsl(var(--color-danger-800))',
                        900: 'hsl(var(--color-danger-900))',
                    },
                    greyscale: {
                        100: 'hsl(var(--color-greyscale-100))',
                        200: 'hsl(var(--color-greyscale-200))',
                        300: 'hsl(var(--color-greyscale-300))',
                        400: 'hsl(var(--color-greyscale-400))',
                        500: 'hsl(var(--color-greyscale-500))',
                        600: 'hsl(var(--color-greyscale-600))',
                        700: 'hsl(var(--color-greyscale-700))',
                        800: 'hsl(var(--color-greyscale-800))',
                        900: 'hsl(var(--color-greyscale-900))',
                    },
                    surface: 'hsl(var(--color-bg-primary))',
                    'text-primary': 'hsl(var(--color-text-primary))',
                }
            },
        fontFamily: {
            sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
};