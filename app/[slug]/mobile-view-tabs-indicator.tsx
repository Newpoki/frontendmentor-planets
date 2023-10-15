'use client'

import { twMerge } from 'tailwind-merge'
import { PlanetsName } from '../types'
import { PlanetViewTabIndicatorData } from './types'

const planetsColor: { [planetName in PlanetsName]: string } = {
    mercury: 'bg-mercury',
    venus: 'bg-venus',
    earth: 'bg-earth',
    mars: 'bg-mars',
    jupiter: 'bg-jupiter',
    saturn: 'bg-saturn',
    uranus: 'bg-uranus',
    neptune: 'bg-neptune',
}

type Props = {
    currentPlanetViewTabIndicatorData: PlanetViewTabIndicatorData | null
}

export const MobileViewTabsIndicator = ({ currentPlanetViewTabIndicatorData }: Props) => {
    if (currentPlanetViewTabIndicatorData == null) {
        return null
    }

    const { planetName, left, width, bottom } = currentPlanetViewTabIndicatorData

    const color = planetsColor[planetName]

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
