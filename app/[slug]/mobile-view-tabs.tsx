'use client'

import { MobileViewTab } from './mobile-view-tab'
import { useState } from 'react'
import { PlanetViewTabIndicatorData } from './types'
import { MobileViewTabsIndicator } from './mobile-view-tabs-indicator'

export const MobileViewTabs = () => {
    const [currentPlanetViewTabIndicatorData, setCurrentPlanetViewTabIndicatorData] =
        useState<PlanetViewTabIndicatorData | null>(null)

    return (
        <nav>
            <ul className="flex items-center justify-between border-b-1 border-b-white/20 px-5">
                <MobileViewTabsIndicator
                    currentPlanetViewTabIndicatorData={currentPlanetViewTabIndicatorData}
                />

                <MobileViewTab
                    name="overview"
                    setCurrentPlanetViewTabIndicatorData={setCurrentPlanetViewTabIndicatorData}
                />
                <MobileViewTab
                    name="structure"
                    setCurrentPlanetViewTabIndicatorData={setCurrentPlanetViewTabIndicatorData}
                />
                <MobileViewTab
                    name="surface"
                    setCurrentPlanetViewTabIndicatorData={setCurrentPlanetViewTabIndicatorData}
                />
            </ul>
        </nav>
    )
}
