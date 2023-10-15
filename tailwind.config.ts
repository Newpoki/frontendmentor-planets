import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
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
        },
        extend: {
            fontFamily: {
                antonio: ['var(--font-antonio)'],
                spartan: ['var(--font-spartan)'],
            },
        },
    },
    plugins: [],
}
export default config
