import { useParams } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { PlanetViewTabIndicatorData, PlanetViewName, PlanetName } from '../types'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

type Props = {
    view: PlanetViewName
    setCurrentPlanetViewTabIndicatorData: (data: PlanetViewTabIndicatorData) => void
}

export const MobileViewTab = ({ view, setCurrentPlanetViewTabIndicatorData }: Props) => {
    const { planetSlug, view: viewParam } = useParams<{
        planetSlug: PlanetName
        view: PlanetViewName
    }>()

    const ref = useRef<HTMLLIElement>(null)

    const isActiveTab = view === viewParam

    // Update the current link indicator with the current found link
    const handleChangeCurrentLinkIndicatorData = useCallback(() => {
        if (ref.current != null && isActiveTab) {
            const clientRect = ref.current.getBoundingClientRect()
            const name = ref.current.getAttribute('data-attribute-name')

            if (name == null) {
                return
            }

            setCurrentPlanetViewTabIndicatorData({
                left: clientRect.left,
                width: clientRect.width,
                name: name as PlanetViewName,
                planetName: planetSlug,
                bottom: clientRect.y + clientRect.height,
            })
        }
    }, [isActiveTab, setCurrentPlanetViewTabIndicatorData, planetSlug])

    useEffect(() => {
        handleChangeCurrentLinkIndicatorData()
    }, [handleChangeCurrentLinkIndicatorData])

    // Update the current link indicator data on resize
    useEffect(() => {
        window.addEventListener('resize', handleChangeCurrentLinkIndicatorData)

        return () => {
            window.removeEventListener('resize', handleChangeCurrentLinkIndicatorData)
        }
    }, [handleChangeCurrentLinkIndicatorData])

    return (
        <li ref={ref} data-attribute-name={view}>
            <Link
                href={`/${planetSlug}/${view}`}
                className="flex items-center justify-between py-5"
            >
                <span
                    className={twJoin(
                        'text-menuSmall uppercase text-white/50',
                        isActiveTab && 'text-white/100'
                    )}
                >
                    {view}
                </span>
            </Link>
        </li>
    )
}
