import { twMerge } from 'tailwind-merge'
import { HeaderPlanetLinkIndicatorData } from './types'
import { PLANETS_COLORS } from '../constants'

type Props = {
    currentLinkIndicatorData: HeaderPlanetLinkIndicatorData | null
}

export const HeaderPlanetLinkIndicator = ({ currentLinkIndicatorData }: Props) => {
    if (currentLinkIndicatorData == null) {
        return null
    }

    const { name, left, width } = currentLinkIndicatorData

    const color = PLANETS_COLORS[name].normal

    return (
        // li as it's always used inside list
        <li
            className={twMerge('fixed left-0 hidden h-1 transition-all desktop:block', color)}
            style={{
                transform: `translateX(${left}px)`,
                width: width,
                top: 0,
            }}
        />
    )
}
