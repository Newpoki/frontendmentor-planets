import { PlanetName } from '../types'
import { twMerge } from 'tailwind-merge'
import { HeaderPlanetLinkIndicatorData } from './types'

type Props = {
    currentLinkIndicatorData: HeaderPlanetLinkIndicatorData | null
}

const planetsColor: { [planetName in PlanetName]: string } = {
    mercury: 'bg-mercury',
    venus: 'bg-venus',
    earth: 'bg-earth',
    mars: 'bg-mars',
    jupiter: 'bg-jupiter',
    saturn: 'bg-saturn',
    uranus: 'bg-uranus',
    neptune: 'bg-neptune',
}

export const HeaderPlanetLinkIndicator = ({ currentLinkIndicatorData }: Props) => {
    if (currentLinkIndicatorData == null) {
        return null
    }

    const { name, left, width } = currentLinkIndicatorData

    const color = planetsColor[name]

    return (
        <div
            className={twMerge('fixed left-0 hidden h-1 transition-all desktop:block', color)}
            style={{
                transform: `translateX(${left}px)`,
                width: width,
                top: 0,
            }}
        />
    )
}
