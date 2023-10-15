import { HeaderPlanetLink } from './header-planet-link'
import { HeaderPlanetLinkIndicatorData } from './types'

type Props = {
    setCurrentLinkIndicatorData: ((data: HeaderPlanetLinkIndicatorData) => void) | null
}

export const HeaderPlanetLinkList = ({ setCurrentLinkIndicatorData }: Props) => {
    return (
        <>
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="mercury"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="venus"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="earth"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="mars"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="jupiter"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="saturn"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="uranus"
            />
            <HeaderPlanetLink
                setCurrentLinkIndicatorData={setCurrentLinkIndicatorData}
                name="neptune"
            />
        </>
    )
}
