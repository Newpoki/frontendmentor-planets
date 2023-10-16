'use client'

import { MobileViewTab } from './mobile-view-tab'
import { useState } from 'react'
import { MobileViewTabsIndicator } from './mobile-view-tabs-indicator'
import { PlanetViewTabIndicatorData } from '../types'

export const MobileViewTabs = () => {
    const [currentPlanetViewTabIndicatorData, setCurrentPlanetViewTabIndicatorData] =
        useState<PlanetViewTabIndicatorData | null>(null)

    return (
        <nav>
            <ul className="flex items-center justify-between border-b-1 border-b-white/20 px-5 tablet:hidden">
                <MobileViewTabsIndicator
                    currentPlanetViewTabIndicatorData={currentPlanetViewTabIndicatorData}
                />

                <MobileViewTab
                    view="overview"
                    setCurrentPlanetViewTabIndicatorData={setCurrentPlanetViewTabIndicatorData}
                />
                <MobileViewTab
                    view="structure"
                    setCurrentPlanetViewTabIndicatorData={setCurrentPlanetViewTabIndicatorData}
                />
                <MobileViewTab
                    view="surface"
                    setCurrentPlanetViewTabIndicatorData={setCurrentPlanetViewTabIndicatorData}
                />
            </ul>
        </nav>
    )
}
