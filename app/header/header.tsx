'use client'

import { useState } from 'react'
import { HeaderMobileMenu } from './header-mobile-menu'
import { HeaderPlanetLinkList } from './header-planet-link-list'
import { HeaderPlanetLinkIndicator } from './header-planet-link-indicator'
import { HeaderPlanetLinkIndicatorData } from './types'

export const Header = () => {
    const [currentLinkIndicatorData, setCurrentLinkIndicatorData] =
        useState<HeaderPlanetLinkIndicatorData | null>(null)

    return (
        <>
            <header className="flex h-[70px] items-center justify-between border-b-1 border-b-white/20 px-6 py-4 tablet:h-auto tablet:flex-col tablet:gap-10 tablet:py-0 desktop:flex-row">
                <h1 className="font-antonio text-mainTitle uppercase ">The planets</h1>

                <HeaderMobileMenu />

                <nav className="hidden tablet:block">
                    <ul className="flex items-center gap-8">
                        <HeaderPlanetLinkIndicator
                            currentLinkIndicatorData={currentLinkIndicatorData}
                        />

                        <HeaderPlanetLinkList
                            setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                        />
                    </ul>
                </nav>
            </header>
        </>
    )
}
