'use client'

import { useEffect, useRef, useState } from 'react'
import { HeaderMobileMenu } from './header-mobile-menu'
import { HeaderPlanetLinkList } from './header-planet-link-list'
import { HeaderPlanetLinkIndicator } from './header-planet-link-indicator'
import { HeaderPlanetLinkIndicatorData } from './types'

export const Header = () => {
    const [currentLinkIndicatorData, setCurrentLinkIndicatorData] =
        useState<HeaderPlanetLinkIndicatorData | null>(null)

    return (
        <>
            <header className="tablet:flex-col tablet:h-auto tablet:gap-10 tablet:py-0 desktop:flex-row flex h-[70px] items-center justify-between border-b-1 border-b-white/20 px-6 py-4">
                <h1 className="font-antonio text-mainTitle uppercase ">The planets</h1>

                <HeaderMobileMenu />

                <nav className="tablet:block hidden">
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
