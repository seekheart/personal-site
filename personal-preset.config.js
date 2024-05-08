import * as defaultTheme from "tailwindcss/defaultTheme";

export const PersonalPresetConfig = {
    theme: {
        extend:
            {
                colors: {
                    brand: 'hsl(var(--color-brand) / <alpha-value>)',
                    accent: 'hsl(var(--color-accent) / <alpha-value>)',
                    greyscale: {
                        100: 'hsl(var(--color-greyscale-100) / <alpha-value>)',
                        200: 'hsl(var(--color-greyscale-200) / <alpha-value>)',
                        300: 'hsl(var(--color-greyscale-300) / <alpha-value>)',
                        400: 'hsl(var(--color-greyscale-400) / <alpha-value>)',
                        500: 'hsl(var(--color-greyscale-500) / <alpha-value>)',
                        600: 'hsl(var(--color-greyscale-600) / <alpha-value>)',
                        700: 'hsl(var(--color-greyscale-700) / <alpha-value>)',
                        800: 'hsl(var(--color-greyscale-800) / <alpha-value>)',
                        900: 'hsl(var(--color-greyscale-900) / <alpha-value>)',
                    },
                    surface: 'hsl(var(--color-surface) / <alpha-value>)',
                    'main-text': 'hsl(var(--color-text) / <alpha-value>)'

                }
            },
        fontFamily: {
            sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
};