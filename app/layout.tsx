import './globals.css'
import type { Metadata } from 'next'
import { Antonio, League_Spartan } from 'next/font/google'
import { Header } from './header/header'
import { MobileViewTabs } from './mobile-view-tabs/mobile-view-tabs'

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
                className={`${antonio.variable} ${spartan.variable} ${spartan.className} flex h-[100dvh] flex-col overflow-hidden  bg-space text-white`}
            >
                <div className="flex flex-1 animate-bg-infinite-h-scroll flex-col overflow-hidden bg-stars-pattern bg-cover bg-center">
                    <Header />

                    <MobileViewTabs />

                    <main className="flex flex-1 flex-col overflow-auto">{children}</main>
                </div>
            </body>
        </html>
    )
}
