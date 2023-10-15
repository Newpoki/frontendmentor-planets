import './globals.css'
import type { Metadata } from 'next'
import { Antonio, League_Spartan } from 'next/font/google'
import { Header } from './header/header'

const antonio = Antonio({ subsets: ['latin'], variable: '--font-antonio' })
const spartan = League_Spartan({ subsets: ['latin'], variable: '--font-spartan' })

export const metadata: Metadata = {
    title: 'Planets facts',
    description: 'Get some facts about planets in our solar system',
}

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body
                className={`${antonio.variable} ${spartan.variable} ${spartan.className} text-white bg-space flex flex-col h-screen`}
            >
                <Header />

                <main className="flex-1 flex flex-col">{children}</main>
            </body>
        </html>
    )
}
