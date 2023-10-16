'use client'

import { twMerge } from 'tailwind-merge'
import { PlanetViewTabIndicatorData } from '../types'
import { PLANETS_COLORS } from '../constants'

type Props = {
    currentPlanetViewTabIndicatorData: PlanetViewTabIndicatorData | null
}

export const MobileViewTabsIndicator = ({ currentPlanetViewTabIndicatorData }: Props) => {
    if (currentPlanetViewTabIndicatorData == null) {
        return null
    }

    const { planetName, left, width, bottom } = currentPlanetViewTabIndicatorData

    const color = PLANETS_COLORS[planetName].normal

    return (
        <div
            className={twMerge('fixed left-0 h-1 transition-all', color)}
            style={{
                transform: `translateX(${left}px)`,
                width: width,
                top: bottom - 4,
            }}
        />
    )
}
