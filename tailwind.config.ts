import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            tablet: '768px',
            desktop: '1440px',
        },
        colors: {
            white: 'rgb(255, 255, 255)',
            space: 'rgb(7, 7, 36)',
            'gray-dark': 'rgb(56, 56, 79)',
            gray: 'rgb(131, 131, 145)',
            mercury: 'rgb(65, 158, 187)',
            venus: 'rgb(237, 162, 73)',
            earth: 'rgb(109, 46, 213)',
            mars: 'rgb(209, 76, 50)',
            jupiter: 'rgb(216, 58, 52)',
            saturn: 'rgb(205, 81, 32)',
            uranus: 'rgb(30, 193, 162)',
            neptune: 'rgb(45, 104, 240)',
            'mercury-soft': '#DEF4FC',
            'venus-soft': '#F7CC7F',
            'earth-soft': '#545BFE',
            'mars-soft': '#FF6A45',
            'jupiter-soft': '#ECAD7A',
            'saturn-soft': '#FCCB6B',
            'uranus-soft': '#65F0D5',
            'neptune-soft': '#497EFA',
        },
        extend: {
            backgroundImage: {
                'stars-pattern': 'url("/assets/background-stars.svg")',
            },
            borderWidth: {
                1: '1px',
            },
            fontFamily: {
                antonio: ['var(--font-antonio)'],
                spartan: ['var(--font-spartan)'],
            },
            fontSize: {
                h1: [
                    '80px',
                    {
                        fontWeight: 400,
                        lineHeight: '103px',
                    },
                ],
                h2: [
                    '40px',
                    {
                        fontWeight: 400,
                        lineHeight: '52px',
                        letterSpacing: '-1.5px',
                    },
                ],
                h3: [
                    '12px',
                    {
                        fontWeight: 700,
                        lineHeight: '25px',
                        letterSpacing: '2.6px',
                    },
                ],
                h4: [
                    '11px',
                    {
                        fontWeight: 700,
                        lineHeight: '25px',
                        letterSpacing: '1px',
                    },
                ],
                mainTitle: [
                    '28px',
                    {
                        fontWeight: 400,
                        lineHeight: 'normal',
                        letterSpacing: '-1.05px',
                    },
                ],
                menu: [
                    '15px',
                    {
                        fontWeight: 700,
                        lineHeight: '25px',
                        letterSpacing: '1.364px',
                    },
                ],
                menuSmall: [
                    '9px',
                    {
                        fontWeight: 700,
                        lineHeight: 'normal',
                        letterSpacing: '1.929px',
                    },
                ],
                body: [
                    '14px',
                    {
                        fontWeight: 400,
                        lineHeight: '25px',
                    },
                ],
            },
            keyframes: {
                'bg-infinite-h-scroll': {
                    '0%': {
                        backgroundPosition: '0 0',
                    },
                    '100%': {
                        backgroundPosition: '-100dvw 0',
                    },
                },
            },
            animation: {
                'bg-infinite-h-scroll': 'bg-infinite-h-scroll 60s linear infinite',
            },
        },
    },
    plugins: [],
}
export default config
